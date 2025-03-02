import React from 'react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const PostCard = ({ post }) => {
  const formattedDate = post.createdAt 
    ? format(new Date(post.createdAt), 'dd MMMM yyyy', { locale: id })
    : 'Tanggal tidak tersedia';

  // Truncate content if it's too long
  const truncatedContent = post.content && post.content.length > 150
    ? `${post.content.substring(0, 150)}...`
    : post.content;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {formattedDate}
        </p>
        <p className="text-gray-500 mb-5 line-clamp-3">
          {truncatedContent}
        </p>
        <div className="mt-auto">
          <a
            href={`/posts/${post.id}`}
            className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
          >
            Baca selengkapnya
            <svg 
              className="ml-1 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;