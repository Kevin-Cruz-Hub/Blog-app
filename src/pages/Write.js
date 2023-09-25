import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
function Write() {
    return (
        <div classname='Write'>
            <h1>Write</h1>
            <form classname='WriteForm'>
                <input type="text" placeholder="Title"  autoFocus='true'/>
                <input type="text" placeholder="Subject" />
                <input type="file" />
                <ReactQuill style={{ color: 'black', border: '1px double black' }} />
                <button style={{ marginTop: '25px' }}>Create Post</button>
            </form>

        </div>
    )
}
export default Write;