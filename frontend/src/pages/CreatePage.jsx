import React from 'react'
import { useState } from "react"
import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon, LoaderIcon } from "lucide-react";
import toast from 'react-hot-toast';
import axios from 'axios';


const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    const [loading, isLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content) {
            toast.error("All fields are required");
            return;
        }
        isLoading(true)

        try {
            await axios.post("http://localhost:5001/api/notes", {
                title,
                content,
            });
            toast.success("Note created successfully.")
            navigate("/")
        } catch(error) {
            console.log("Error creating note", error)
            toast.error("Failed to create note")
        } finally {
            isLoading(false)
        }
    };

    if (loading) {
      return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
          <LoaderIcon className="animate-spin size-10" />
        </div>
      );
    }

  
    return (
      <div className="min-h-screen bg-base-200">
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <Link to={"/"} className="btn btn-ghost mb-6">
                  <ArrowLeftIcon className="size-5" />
                  Back to Notes
                </Link>

                <div className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#00FF9D]">
                  <div className="card-body">
                    <h2 className="card-title text-2xl mb-4">Create New Note</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="form-control mb-4">
                        <label className="label w-full items-start">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Note Title'
                            className="input input-bordered w-full mt-1"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                        />
                      </div>

                      <div className="form-control mb-4">
                        <label className="label w-full items-start">
                            <span className="label-text">Content</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Write your note here..."
                            className="textarea textarea-bordered w-full block h-32 mt-1"
                            value={content}
                            onChange={(e)=>setContent(e.target.value)}
                        />
                      </div>

                      <div className="flex justify-end">
                        <button type='submit' className="btn btn-success">Create Note</button>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
      </div> 
    );
};

export default CreatePage