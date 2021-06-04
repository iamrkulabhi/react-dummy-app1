import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {

    const [filteredyear, setFilteredYear] = useState('2020');

    const expenses = props.expenses;

    const filterChangeHandler = (selectedYear) => {
        //console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedYear={filteredyear} onFilterChange={filterChangeHandler}/>
                <ExpenseItem 
                title={expenses[0].title} 
                amount={expenses[0].amount} 
                date={expenses[0].date}
                />
                <ExpenseItem 
                title={expenses[1].title} 
                amount={expenses[1].amount} 
                date={expenses[1].date}
                />
                <ExpenseItem 
                title={expenses[2].title} 
                amount={expenses[2].amount} 
                date={expenses[2].date}
                />
                <ExpenseItem 
                title={expenses[3].title} 
                amount={expenses[3].amount} 
                date={expenses[3].date}
                />
            </Card>
        </div>
    );
}

export default Expenses;

