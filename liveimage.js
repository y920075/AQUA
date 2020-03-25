const [avatarFile, setAvatarFile] = useState('');
    const [avatarDataFiles, setAvatarDataFiles] = useState('');
    const handleChange = (event) => {
        console.log(event.target.files)
        setAvatarFile(URL.createObjectURL(event.target.files[0]))
        console.log(event.target.files[0])
        setAvatarDataFiles(event.target.files[0])
    }

    // {props.blogData.result ? (props.blogData.result.map((value, index)=>{
    //     if(value.id == props.match.params.id)
    //     return()
    // })) : ''}
