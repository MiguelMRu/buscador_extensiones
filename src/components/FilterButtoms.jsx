import './FilterButtoms.css'

export function FilterButtoms( { changeFilter }) {


    const handleFilter = (event) =>{
        changeFilter(event.target.value)
    }

    return(
        <div className='filter-buttons'>
            <input 
                    type="radio"
                    name="filter"
                    id="All"
                    value="All"
                    defaultChecked
                    onChange={handleFilter}
                    />
            <label htmlFor="All">All</label>
            
            <input 
                    type="radio" 
                    name="filter" 
                    id="Active"
                    value="Active"
                    onChange={handleFilter}/>
            <label htmlFor="Active">Active</label>
            
            <input 
                    type="radio" 
                    name="filter" 
                    id="Inactive"
                    value="Inactive"
                    onChange={handleFilter}/>
            <label htmlFor="Inactive">Inactive</label>
        </div>

    )
}