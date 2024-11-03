import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, ThumbsDown, Reply } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  votes: number;
  replies: Comment[];
}

interface CommentSectionProps {
  comments: Comment[];
}

const CommentComponent: React.FC<{ comment: Comment; depth?: number }> = ({ 
  comment, 
  depth = 0 
}) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [voteCount, setVoteCount] = useState(comment.votes);

  return (
    <div 
      className={`${depth > 0 ? 'ml-8 border-l-2 border-gray-700 pl-4' : ''} mb-4`}
    >
      <div className="bg-[#1e242c] rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            {comment.author[0].toUpperCase()}
          </div>
          <span className="font-medium">{comment.author}</span>
          <span className="text-gray-400 text-sm">{comment.timestamp}</span>
        </div>
        
        <p className="text-gray-300 mb-3">{comment.content}</p>
        
        <div className="flex items-center space-x-4 text-gray-400">
          <button 
            className="flex items-center space-x-1 hover:text-blue-400"
            onClick={() => setVoteCount(prev => prev + 1)}
          >
            <ThumbsUp size={14} />
            <span>{voteCount}</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-red-400">
            <ThumbsDown size={14} />
          </button>
          <button 
            className="flex items-center space-x-1 hover:text-gray-200"
            onClick={() => setShowReplyInput(!showReplyInput)}
          >
            <Reply size={14} />
            <span>Reply</span>
          </button>
        </div>

        {showReplyInput && (
          <div className="mt-4">
            <textarea 
              className="w-full bg-[#2a3441] rounded-lg p-3 text-gray-200 placeholder-gray-500"
              placeholder="Write a reply..."
              rows={3}
            />
            <div className="mt-2 flex justify-end space-x-2">
              <button 
                className="px-3 py-1 text-sm bg-transparent text-gray-400 hover:text-gray-200"
                onClick={() => setShowReplyInput(false)}
              >
                Cancel
              </button>
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                Reply
              </button>
            </div>
          </div>
        )}
      </div>

      {comment.replies?.map(reply => (
        <CommentComponent key={reply.id} comment={reply} depth={depth + 1} />
      ))}
    </div>
  );
};

export const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <div className="bg-[#1e242c] rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <MessageSquare size={20} />
          Discussion
        </h2>
        <span className="text-gray-400">{comments.length} comments</span>
      </div>

      <div className="mb-6">
        <textarea 
          className="w-full bg-[#2a3441] rounded-lg p-4 text-gray-200 placeholder-gray-500"
          placeholder="Share your experience..."
          rows={4}
        />
        <div className="mt-2 flex justify-end">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Comment
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {comments.map(comment => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};