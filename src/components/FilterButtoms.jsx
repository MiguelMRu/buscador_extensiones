import './FilterButtoms.css'

export function FilterButtoms(){

    return(
        <div className='filter-buttons'>
            <input 
                    type="radio"
                    name="filter"
                    id="All"
                    value="All"
                    defaultChecked
                    />
            <label htmlFor="All">All</label>
            
            <input 
                    type="radio" 
                    name="filter" 
                    id="Active"
                    value="Active"/>
            <label htmlFor="Active">Active</label>
            
            <input 
                    type="radio" 
                    name="filter" 
                    id="Inactive"
                    value="Inactive"/>
            <label htmlFor="Inactive">Inactive</label>
        </div>

    )
}