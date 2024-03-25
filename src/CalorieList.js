/*Itay Vekselbaum 211871827, Dor Bergel 322271792, Eyal Avni 212211734*/

/*Imports for all the components or stylesheets we would use*/
import * as React from 'react';

export default function CaloriesList(props) {
    return (
        /*use a div to wrap and style the CalorieList component*/
        <div className={'half-box right-box'}>
            <div className={'row'}>
                {/*set a label to create an "all" filter to show all the meals in the DB*/}
                <label className={'AllFilterOutline'}>
                    {/* Use a radio type input to get if the user select the "all" filter*/}
                    <input
                        type="radio"
                        className="form-check-input"
                        id="all-filter"
                        name="list-filter"
                        value={"all"}
                        // use the onChane property to change the filter by the user selection
                        onChange={() => props.filterFunc('all')}/>
                    All
                </label>
                <div className={'col-6'}>
                    {/*set a label to create a "month" filter to show the meals in the DB by specific month*/}
                    <label className="input input_icon">
                        {/* Use a month type input to get the month that the user select to filter*/}
                        <input type="month" className="input__field"
                               id="month-filter"
                               name="list-filter"
                            // use the onChane property to change the month filter by the user date selection
                               onChange={(e) => props.filterFunc(e.target.value)}/>
                        <span className="input__label">
                            MM/YYYY</span>
                    </label>
                </div>
            </div>
            {/*Present the calorie List from the DB by the filter that chose*/}
            <div className={'cal-lst'}>
                {props.caloriesList}
            </div>
            {/*Present the total calorie of all the meals that in the DB*/}
            <div className={'cal-sum'}>
                <h1>{props.caloriesSum} Calories</h1>
            </div>
        </div>
    );
}
