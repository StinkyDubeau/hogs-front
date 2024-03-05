export default function Button(props) {
    return (
        <button className='font-sansui m-1 bg-red-500 p-2 border-b-4 border-red-700 rounded-lg border-solid w-28 hover:bg-red-400 hover:w-36 transition-all'>
            <p>{props.text}</p>
        </button>
    );
}