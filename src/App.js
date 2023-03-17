import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './router';
import 'slick-carousel/slick/slick.css';
import { API } from './libs/axiosClient';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { PopulateStudents } from './store/actions/populate-students'

message.config({
    duration: 2,
    maxCount: 1,
});

function App() {
    const dispatcher = useDispatch()
    useEffect(() => {
        API.GET('/students')
            .then((response) => {
                dispatcher(PopulateStudents(response.data.data))
            })
            .catch((error) => console.error(error));
    }, [dispatcher]);
    return (
        <HashRouter>
            <AppRoutes />
        </HashRouter>
    );
}

export default App;