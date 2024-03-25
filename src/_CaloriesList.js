import {useState} from "react";
import idb from "./idb";

export default function _CaloriesList() {
    const [caloriesList, setCaloriesList] = useState([]);

    const handleFilterChange = async (filterValue) => {

        await idb.openCaloriesDB("caloriesdb",4);
        let dbItems = await idb.getCalories();
        const now = new Date();

        dbItems = JSON.parse(dbItems);
        //console.log('dbItems: ' + JSON.parse(dbItems).filter((item) => (item.year === now.getFullYear())));

        if (filterValue === "all") {

            console.log('all is checked');
        }
        else if (filterValue === "month") {
            dbItems = dbItems.filter((item) => (item.month === now.getMonth()));
            console.log('month is checked');
            console.log(caloriesList);
        }
        else if (filterValue === "year") {
            dbItems = dbItems.filter((item) => (item.year === now.getFullYear()));
            console.log('year is checked');
            console.log(caloriesList);
        }
        dbItems = dbItems.map((item) => (
            <li>
                <ul>
                    <li>{item.calorie}</li>
                    <li>{item.category}</li>
                    <li>{item.description}</li>
                </ul>
            </li>));

        setCaloriesList(dbItems);

    };

    return (
        <div>
            <div >
                <input
                    type="radio"
                    id="all-filter"
                    name="list-filter"
                    value={"all"}
                    onChange={() => handleFilterChange('all')}
                />
                <label htmlFor="all-filter">All</label>
                <input
                    type="radio"
                    id="month-filter"
                    name="list-filter"
                    value={"month"}
                    onChange={() => handleFilterChange('month')}
                />
                <label htmlFor="month-filter">Month</label>
                <input
                    type="radio"
                    id="year-filter"
                    name="list-filter"
                    value={"year"}
                    onChange={() => handleFilterChange('year')}
                />
                <label htmlFor="year-filter">Year</label>
            </div>
            <div>
                <ul>{caloriesList}</ul>
            </div>
        </div>
    );
}
