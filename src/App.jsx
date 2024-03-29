import React, { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './router';
//import { API } from './libs/axiosClient';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { PopulateStudents } from './store/actions/populate-students'
import { Preloader } from './components/commons/preloader';
import './App.css'
import { data } from './helpers/data';

message.config({
    duration: 2,
    maxCount: 1,
});

function App() {
    const [isLoading, setLoading] = useState(true)
    const dispatcher = useDispatch()
    useEffect(() => {
        //API.GET('/students')
        //    .then((response) => {
        //        dispatcher(PopulateStudents(response.data.data))
        //        setLoading(false)
        //    })
        //    .catch((error) => {
        //        message.error(error.message)
        //    });
        
        dispatcher(PopulateStudents(data))
        setLoading(false)
    }, [dispatcher]);
    return (
        <>
            <HashRouter>
                {
                    isLoading ? <Preloader /> :
                        <>
                            <AppRoutes />
                        </>
                }
            </HashRouter>
        </>
    );
}

export default App;