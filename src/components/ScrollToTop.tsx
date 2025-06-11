
import NorthIcon from '@mui/icons-material/North';



function ScrollToTop() {

    const HandleScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div onClick={HandleScroll} className='light-yellow  text-black p-1 rounded-lg cursor-pointer fixed right-5 z-50 bottom-10 '>
            <NorthIcon />
        </div>
    )
}

export default ScrollToTop
