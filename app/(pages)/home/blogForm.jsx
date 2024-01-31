"use client"

const BlogForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValue = Object.fromEntries(formData);
        await fetch("", {
            method: "POST",
            boyd: JSON.stringify(formValue),
            headers: {
                'Content-type': 'application/json'
            }
        })
        console.log("Form data :-", formData);
        console.log("Form Values :- ", formValue);
        // window.location.reload();
    };

    return (
        <>
            <form className='z-20 flex -mt-24 mb-10 text-black h-full w-full justify-start items-center flex-col' action='#' method='POST' onSubmit={handleSubmit}>
                <h1 className="text-3xl text-white font-bold text-center py-10">🍀POST🍀</h1>
                <div className="w-3/4 h-full px-10">
                    <div className="grid gap-4 mb-5">
                        <label className="font-light text-lg text-gray-200">Blog Title</label>
                        <input className="rounded-md px-4 text-lg py-3 shadow-[#000000] shadow-md" name="title" placeholder="Title" />
                    </div>
                    <div className="grid gap-4 mb-5">
                        <label className="font-light text-lg text-gray-200">Image Link</label>
                        <input className="rounded-md px-4 text-lg py-3 shadow-[#000000] shadow-md" name="img_link" placeholder="Paste your image link" />
                    </div>
                    <div className="grid gap-4 mb-5">
                        <label className="font-light text-lg text-gray-200">Description</label>
                        <textarea className="rounded-md px-4 text-lg py-3 shadow-[#000000] shadow-md" rows={4} name="desc" placeholder="Description" />
                    </div>
                    <div className="grid gap-4 mb-5">
                        <label className="font-light text-lg text-gray-200">Content</label>
                        <textarea className="rounded-md px-4 text-lg py-3 shadow-[#000000] shadow-md" rows={10} name="desc" placeholder="Main Content" />
                    </div>
                    <button className="bg-green-500 text-white hover:bg-green-700 transition-all ease-in-out duration-200 active:translate-y-1 py-3 px-16 rounded-sm font-semibold tracking-wide shadow-sm shadow-black uppercase text-xl">Submit</button>
                </div>
            </form>
        </>
    );
};

export default BlogForm;
