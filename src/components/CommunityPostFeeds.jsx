import React, { useState } from "react";

const CommunityPostFeeds = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "John Doe",
      content: "Just fixed my kitchen sink! It wasn't as hard as I thought. #DIYSuccess",
      timestamp: "2 hours ago",
      imageUrl: "/images/sink-fix.jpg",
      likes: 5,
      comments: [
        { user: "Mike Green", text: "Great job! Looks awesome!" },
        { user: "Emma Stone", text: "Nice work, I should try that too!" },
      ],
      liked: false, // Tracks if the current user has liked this post
    },
    {
      id: 2,
      user: "Sarah Lee",
      content: "Looking for recommendations for a reliable plumber in my area. Any suggestions?",
      timestamp: "1 day ago",
      imageUrl: "/images/plumber.jpg",
      likes: 3,
      comments: [],
      liked: false,
    },
    {
      id: 3,
      user: "Mike Green",
      content: "Replaced my bathroom faucet today! Learned a lot about water pressure. Anyone else here a plumbing enthusiast?",
      timestamp: "3 days ago",
      imageUrl: "/images/faucet-replace.jpg",
      likes: 8,
      comments: [
        { user: "Tommy James", text: "I love plumbing projects!" },
      ],
      liked: false,
    },
  ]);

  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);

  // Handle Like Toggle
  const handleLikeToggle = (postId) => {
    setPosts(posts.map((post) =>
      post.id === postId
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  // Handle Comment Submit
  const handleCommentSubmit = (postId, commentText) => {
    if (!commentText) return;

    setPosts(posts.map((post) =>
      post.id === postId
        ? { ...post, comments: [...post.comments, { user: "New User", text: commentText }] }
        : post
    ));
  };

  // Handle Post Submit
  const handlePostSubmit = () => {
    if (!newPostContent) return;

    const newPost = {
      id: posts.length + 1,
      user: "New User", // Replace with logged-in user info
      content: newPostContent,
      timestamp: "Just now",
      imageUrl: newPostImage ? URL.createObjectURL(newPostImage) : "/images/default.jpg",
      likes: 0,
      comments: [],
      liked: false,
    };

    setPosts([newPost, ...posts]);

    // Clear the form
    setNewPostContent("");
    setNewPostImage(null);
  };

  const handleImageChange = (e) => {
    setNewPostImage(e.target.files[0]);
  };

  return (
    <section className="py-16 px-6 bg-lightColor3 text-secondaryColor-dark">
      <h2 className="text-4xl font-semibold mb-8 text-center text-primaryColor">
        Community Posts & DIY Tips
      </h2>

      {/* Post Submission Area */}
      <div className="max-w-2xl mx-auto">
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          className="w-full p-4 mb-4 border border-gray-600 rounded-lg"
          placeholder="Share your experience, DIY tips, or ask a question..."
        />

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />

        <button
          onClick={handlePostSubmit}
          className="bg-primaryColor text-white py-2 px-4 rounded"
        >
          Post
        </button>
      </div>

      {/* Post Feed Area */}
      <div className="space-y-6 mt-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-600 p-6 bg-white rounded-lg shadow-lg"
          >
            <div className="flex items-center">
              {/* User Info */}
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                {post.user.charAt(0)}
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">{post.user}</h3>
                <span className="text-sm text-gray-400">{post.timestamp}</span>
              </div>
            </div>

            {/* Post Content */}
            <div className="mt-4">
              <p className="text-gray-600">{post.content}</p>
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt="Post image"
                  className="mt-4 w-full h-auto max-h-80 object-contain rounded-lg"
                />
              )}
            </div>

            {/* Like and Comment Interactions */}
            <div className="mt-4 text-gray-500 flex items-center space-x-4">
              <button
                onClick={() => handleLikeToggle(post.id)}
                className={`flex items-center space-x-2 ${post.liked ? "text-primaryColor" : "text-gray-500"}`}
              >
                <span className="material-icons">thumb_up</span>
                <span>{post.liked ? "Liked" : "Like"}</span>
              </button>
              <span className="text-gray-500">{post.likes} Likes</span>
              <button
                className="flex items-center space-x-2"
                onClick={() => alert('Add your comment here')}
              >
                <span className="material-icons">comment</span>
                <span>Comment</span>
              </button>
            </div>

            {/* Comments Section */}
            <div className="mt-4">
              <textarea
                placeholder="Write a comment..."
                className="w-full p-2 border border-gray-600 rounded-lg mb-4"
                onKeyDown={(e) => e.key === "Enter" && handleCommentSubmit(post.id, e.target.value)}
              />
              <div className="space-y-2">
                {post.comments.map((comment, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm">
                      {comment.user.charAt(0)}
                    </div>
                    <div className="text-gray-600">{comment.user}: {comment.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityPostFeeds;
