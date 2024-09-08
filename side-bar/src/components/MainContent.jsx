import React, {useEffect, useState} from 'react';
import '../styles/main-content.css';
import {useParams} from "react-router-dom";

/**
 * @function MainContent
 * @description The main content component that displays the data
 * based on the dynamic route parameter.
 * @param {boolean} isCollapsed - Whether the sidebar is collapsed.
 * @returns {JSX.Element} The main content component.
 */
const MainContent = ({ isCollapsed }) => {
    const { page } = useParams(); // Get the dynamic route parameter
    const [data, setData] = useState(null);

    /*// Dummy data to simulate backend responses
    const dummyData = {
        data1: {
            title: "Data 1",
            content: "This is content for Data 1."
        },
        data2: {
            title: "Data 2",
            content: "This is content for Data 2."
        },
        data3: {
            title: "Data 3",
            content: "This is content for Data 3."
        },
    };

    useEffect(() => {
        // Simulate fetching data from an API based on the page parameter
        const fetchData = () => {
            // Simulate a delay as if fetching data from an API
            setTimeout(() => {
                // Set data based on the route parameter
                const response = dummyData;
                setData(response);
            }, 500); // 500ms delay for simulation
        };

        fetchData();
    }, [page]);
*/

    return (
        <div className={`main-content ${isCollapsed ? 'ml-80' : 'ml-250'} flex-grow-1`}>
          {/*  <div>
                <h1>{data ? data.title : 'Loading...'}</h1>
                {data ? (
                    <div>
                        <p>{data.body}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>*/}
            <h1>Main Content</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, delectus distinctio dolore fugit illum, in ipsam, ipsum iusto laborum molestiae possimus qui ratione rerum sint tenetur ut veniam vitae voluptate?</p>
        </div>
    );
};

export default MainContent;
