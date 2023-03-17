import React, {useState} from 'react';
import ListItem from './list-item';
//import { listData } from '../../helpers/student-list';
import ListHeader from './list-header';
import Filters from './filters';
import Pagination from './pagination';
import GridItem from './grid-item';
 
const ListStudents = ({data}) => { 
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const [viewType, setViewType] = useState('list');

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
 
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	return (
		<div>
			<div className='flex items-center justify-between my-5'>
				<Filters viewType={viewType} setViewType={setViewType}/>
				<Pagination itemsPerPage={itemsPerPage} totalItems={data.length} paginate={paginate} perPage={setItemsPerPage}/>
			</div>
			
			{viewType === 'list' && <ListHeader/>}

			{
				currentItems.map((item,_) => 
					viewType === 'list' &&
                    <ListItem key={_} id={item.id} name={`${item.first_name} ${item.last_name}`} gender={item.gender} class={item.class} dob={item.dob} address={`${item?.residential_address} ${item?.postal_address}`} /> 
				)
			}
			<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12'>
				{
					currentItems.map((item, _) =>
                        viewType === 'grid' && <GridItem key={_} name={`${item.first_name} ${item.last_name}`} gender={item.gender} class={item.class} dob={item.dob} address={`${item?.residential_address} ${item?.postal_address}`}/>
					)
				}
			</div>
		</div>
	);
};

export default ListStudents;