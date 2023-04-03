import React, { useState, useEffect } from 'react';
import ListItem from './list-item';
//import { listData } from '../../helpers/student-list';
import ListHeader from './list-header';
import Filters from './filters';
import Pagination from './pagination';
import GridItem from './grid-item';
import { searchFilter } from '../../helpers/search-filter';

const ListStudents = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [viewType, setViewType] = useState('list');
    const [listData, setListData] = useState([]);
    const [noSearch, setNoSearch] = useState(false);

    useEffect(() => {
        setListData([...data])
    }, [data]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = listData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearchFilter = (searchBy) => {
        if (searchBy.length === 0 || searchBy === '') return setListData([...data])
        const filteredSearchData = searchFilter(searchBy, listData)
        if (filteredSearchData.length === 0) setNoSearch(true)
        else {
            setNoSearch(false)
            setListData([...filteredSearchData]);
        }
    }


    return (
        <div>
            <div className='flex items-center justify-between my-5'>
                <Filters viewType={viewType} setViewType={setViewType} handleSearchFilter={handleSearchFilter} />
                <Pagination itemsPerPage={itemsPerPage} totalItems={listData.length} paginate={paginate} perPage={setItemsPerPage} />
            </div>

            {viewType === 'list' && <ListHeader />}

            {
                noSearch ? <h1>No Search Results found</h1> :
                currentItems.map((item, _) =>
                        viewType === 'list' &&
                        <ListItem key={_} id={item.id} name={`${item.first_name} ${item.last_name}`} gender={item.gender} className={item.class} dob={item.dob} address={`${item?.residential_address} ${item?.postal_address}`} />
                )
            }
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12'>
                {
                    noSearch ? <h1>No Search Results found</h1> :
                    currentItems.map((item, _) =>
                            viewType === 'grid' && <GridItem key={_} name={`${item.first_name} ${item.last_name}`} gender={item.gender} className={item.class} dob={item.dob} address={`${item?.residential_address} ${item?.postal_address}`} />
                    )
                }
            </div>
        </div>
    );
};

export default ListStudents;