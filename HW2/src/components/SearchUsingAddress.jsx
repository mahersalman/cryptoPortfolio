import React , {useState} from 'react'


function SearchUsingAddress(){
    const [address , setAddress] = useState('');

    function SearchAddressButton(address){
        setAddress(address);
    }

    return(
        <div>
            Enter Address :  <input name="myInput" className= "rounded-md" />
            <button
                onClick={SearchAddressButton}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                >
                Add
            </button>
        </div>
    );
}

export default SearchUsingAddress;