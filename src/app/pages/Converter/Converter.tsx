import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCloudUpload, AiOutlineDownload } from 'react-icons/ai';

const ConverterPage = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [csvContents, setCsvContents] = useState<{ [key: string]: string }>({});
    const [isConverting, setIsConverting] = useState<boolean[]>([]);
    const [dragging, setDragging] = useState<boolean>(false); // State to track dragging state

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(false); // Reset dragging state
        const newFiles = Array.from(event.dataTransfer.files);
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = Array.from(event.target.files || []);
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
    };

    const convertToCSV = (file: File, index: number) => {
        const reader = new FileReader();
        reader.onload = () => {
            const content = reader.result as string;
            // Simulated CSV conversion
            const simulatedCsvContent = content.split('\n').map(line => line.split(' ').join(',')).join('\n');
            setCsvContents(prev => ({ ...prev, [file.name]: simulatedCsvContent }));
            setIsConverting(prev => {
                const newConverting = [...prev];
                newConverting[index] = false;
                return newConverting;
            });
        };
        reader.readAsText(file);
    };

    const handleConvertClick = (file: File, index: number) => {
        setIsConverting(prev => {
            const newConverting = [...prev];
            newConverting[index] = true;
            return newConverting;
        });
        convertToCSV(file, index);
    };

    const downloadCSV = (fileName: string) => {
        const csvContent = csvContents[fileName];
        if (csvContent) {
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${fileName}.csv`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <motion.section
            className='min-h-screen mx-12 lg:mx-0 overflow-hidden'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h5 className='text-3xl font-bold text-zinc-700 text-center '>VERY SIMPLE!</h5>
            <h3 className='text-2xl font-normal leading-relaxed text-zinc-500 text-center pb-5'>
                {dragging ? "Drop your file here" : files.length > 0 ? "Choose another file or drop it here" : "Choose your file and convert it!"}
            </h3>

            <label
                htmlFor="uploadFile1"
                className={`bg-zinc-800 text-gray-500 font-semibold text-base rounded max-w-2xl h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif] ${dragging ? 'bg-zinc-600' : ''}`}
                // @ts-ignore
                onDrop={handleDrop}
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
            >
                <AiOutlineCloudUpload className={`w-11 mb-2 fill-gray-500 ${dragging ? 'text-gray-200' : ''}`} />
                {dragging ? "Drop here" : "Upload file"}
                <input type="file" id="uploadFile1" className="hidden" multiple onChange={handleFileSelect} />
                <p className="text-xs font-medium text-gray-400 mt-2">
                    Any file Allowed
                </p>
                {!dragging && files.length > 0 && <p className="text-xs font-medium text-gray-400 mt-2">Or choose another file.</p>}
            </label>

            <div className="mt-12">
                {files.length > 0 && (
                    <table className="max-w-6xl mx-auto w-full bg-zinc-800  rounded-3xl bg-gradient-to-tr from-zinc-700 to-zinc-950">
                        <thead>
                            <tr className='text-left text-zinc-400'>
                                <th className="py-2 px-4 border-b border-zinc-900">File Name</th>
                                <th className="py-2 px-4 border-b border-zinc-900">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {files.map((file, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b border-zinc-900 text-zinc-400">{file.name}</td>
                                    <td className="py-2 px-4 border-b border-zinc-900">
                                        {isConverting[index] ? (
                                            <span className='text-zinc-500'>Converting...</span>
                                        ) : (
                                            !csvContents[file.name] && (
                                                <button
                                                    className="bg-zinc-500 text-white px-4 py-2 rounded"
                                                    onClick={() => handleConvertClick(file, index)}
                                                >
                                                    Convert
                                                </button>
                                            )
                                        )}
                                        {csvContents[file.name] && (
                                            <button
                                                className="bg-zinc-500  flex text-white px-4 py-2 rounded ml-2"
                                                onClick={() => downloadCSV(file.name)}
                                            >
                                                <AiOutlineDownload className="mt-1 text-xl mr-1" />
                                                Download CSV
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </motion.section>
    );
};

export default ConverterPage;
