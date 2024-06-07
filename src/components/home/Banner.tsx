import React from 'react';
import { motion } from 'framer-motion';
import { useTable } from 'react-table';
import '../styles/Banner.css'
import { Link } from 'react-router-dom';
interface CompanyData {
    companyName: string;
    services: string;
    rate: string;
    efficiency: string;
    usageRate: string;
}

const Banner: React.FC = () => {
    const data: CompanyData[] = React.useMemo(
        () => [
            {
                companyName: 'Mracula',
                services: 'CSV Download Application',
                rate: '$9/month',
                efficiency: 'Very High',
                usageRate: '95%',
            },
            {
                companyName: 'DataDownloader Inc.',
                services: 'CSV Export Tool',
                rate: '$20/month',
                efficiency: 'High',
                usageRate: '92%',
            },
            {
                companyName: 'QuickCSV Solutions',
                services: 'CSV File Downloader',
                rate: '$18/month',
                efficiency: 'High',
                usageRate: '89%',
            },
            {
                companyName: 'CSV Master',
                services: 'CSV File Manager',
                rate: '$22/month',
                efficiency: 'Very High',
                usageRate: '93%',
            },
            {
                companyName: 'ExportEase',
                services: 'CSV Data Exporter',
                rate: '$15/month',
                efficiency: 'Medium',
                usageRate: '87%',
            },
            {
                companyName: 'CSV Genie',
                services: 'CSV Export Wizard',
                rate: '$11/month',
                efficiency: 'Medium',
                usageRate: '85%',
            },
            {
                companyName: 'FileFlow',
                services: 'CSV File Transfer',
                rate: '$14/month',
                efficiency: 'High',
                usageRate: '88%',
            },
            {
                companyName: 'DataStream',
                services: 'CSV Stream Export',
                rate: '$13/month',
                efficiency: 'High',
                usageRate: '90%',
            },
            {
                companyName: 'Efficient Export',
                services: 'CSV Efficiency Tool',
                rate: '$16/month',
                efficiency: 'High',
                usageRate: '91%',
            },
            {
                companyName: 'RapidExport',
                services: 'Quick CSV Exporter',
                rate: '$10/month',
                efficiency: 'Medium',
                usageRate: '86%',
            },
            {
                companyName: 'CSV Pro',
                services: 'Professional CSV Export',
                rate: '$19/month',
                efficiency: 'Very High',
                usageRate: '94%',
            },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            {
                Header: 'Company Name',
                accessor: 'companyName',
            },
            {
                Header: 'Services',
                accessor: 'services',
            },
            {
                Header: 'Rate',
                accessor: 'rate',
            },
            {
                Header: 'Efficiency',
                accessor: 'efficiency',
            },
            {
                Header: 'Usage Rate',
                accessor: 'usageRate',
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        // @ts-ignore
    } = useTable<CompanyData>({ columns, data });

    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    background: "url(https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fu7wm2c5rn1871.gif)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
                
                className="py-20"
            >
                <div className="px-12 mx-auto max-w-7xl">
                    <div className="w-full mx-auto text-left  md:w-11/12 xl:w-9/12 md:text-center">
                        <h1 className="mb-8 text-2xl sm:text-3xl md:text-4xl w-full   font-extrabold leading-none tracking-normal text-gray-400 lg:text-6xl md:tracking-tight">
                            <span>A</span>{" "}
                            <span className="w-full lg:py-2 text-transparent bg-clip-text lg:leading-12 bg-gradient-to-r from-zinc-600 to-gray-600 lg:inline">
                                CSV File Downloader
                            </span>{" "}
                            <span>App</span>
                        </h1>
                        <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                            Download CSV files with ease and efficiency. Manage your data effortlessly with our intuitive application.
                        </p>
                        <Link to="/csv-converter"
                       
                            className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-zinc-400 font-bold bg-zinc-800 bg-lime-6 rounded-2xl sm:w-auto sm:mb-0"
                        >
                            Start Now
                        </Link>
                    </div>

                </div>
            </motion.section>

            <motion.section
              
                className="py-12"
            >
                <div className="container mx-auto px-4">
                    <div className="flex justify-center overflow-hidden  md:overflow-x-auto">
                        <motion.table
                            {...getTableProps()}
                            className="table-auto w-full lg:w-3/4 bg-gradient-to-tr from-zinc-700 to-zinc-950 shadow-md rounded-lg table-style overflow-hidden"
                           
                
                        >
                            <thead className="bg-zinc-900 text-gray-200 uppercase text-sm leading-normal">
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th className="py-5 px-6 text-left" {...column.getHeaderProps()}>{column.render('Header')}</th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()} className="text-gray-200 text-sm font-light">
                                {rows.map(row => {
                                    prepareRow(row)
                                    return (
                                        <tr
                                            {...row.getRowProps()}
                                            className="border-b border-zinc-900 py-5"
                                            style={{ transition: 'transform 0.5s', transformOrigin: 'center', transformStyle: 'preserve-3d' }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateX(-10deg)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = ''}
                                        >
                                            {row.cells.map(cell => {
                                                return (
                                                    <td className="py-5 px-6 text-left whitespace-nowrap" {...cell.getCellProps()}>
                                                        {cell.render('Cell')}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </motion.table>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default Banner;
