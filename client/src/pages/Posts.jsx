import React, { useState } from "react";

const Posts = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewPost({ ...newPost, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form submission (e.g., send to API)
    console.log("Form submitted:", newPost);
    alert("Post created successfully!");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="max-w-lg w-full bg-gray-800 text-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Create a New Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={newPost.title}
                    onChange={handleChange}
                    placeholder="Enter post title"
                    className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
                    required
                />
                </div>

                {/* Content */}
                <div>
                <label htmlFor="content" className="block mb-2 text-sm font-medium">
                    Content
                </label>
                <textarea
                    id="content"
                    name="content"
                    value={newPost.content}
                    onChange={handleChange}
                    placeholder="Write your content here"
                    className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
                    rows="5"
                    required
                ></textarea>
                </div>

                {/* Image */}
                <div>
                <label htmlFor="image" className="block mb-2 text-sm font-medium">
                    Image
                </label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
                />
                </div>

                {/* Submit Button */}
                <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-indigo-500 text-white py-2 px-4 rounded hover:opacity-90"
                >
                Create Post
                </button>
            </form>
        </div>
    </div>
    
  );
};

export default Posts;
