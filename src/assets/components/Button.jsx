export default function Button(props) {
    return (
        <button className='font-sansui m-1 bg-red-500 p-2 rounded-lg border-solid hover:bg-red-600 '>
            {props.text}
        </button>
    );
}