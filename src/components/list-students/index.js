import React, {useState} from 'react';
import ListItem from './list-item';
import { listData } from '../../helpers/student-list';
import ListHeader from './list-header';
import Filters from './filters';
import Pagination from './pagination';
import GridItem from './grid-item';

const ListStudents = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const [viewType, setViewType] = useState('list');

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = listData.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	return (
		<div>
			<div className='flex items-center justify-between my-5'>
				<Filters viewType={viewType} setViewType={setViewType}/>
				<Pagination itemsPerPage={itemsPerPage} totalItems={listData.length} paginate={paginate} perPage={setItemsPerPage}/>
			</div>
			
			{viewType === 'list' && <ListHeader/>}

			{
				currentItems.map((item,_) => 
					viewType === 'list' &&
						<ListItem key={_} id={item.id} name={item.name} gender={item.gender} class={item.class} dob={item.dob} address={item.address} /> 
				)
			}
			<div className='grid grid-cols-3 gap-10'>
				{
					currentItems.map((item, _) =>
						viewType === 'grid' && <GridItem key={_} name={item.name} gender={item.gender} class={item.class} dob={item.dob} address={item.address}/>
					)
				}
			</div>
		</div>
	);
};

export default ListStudents;