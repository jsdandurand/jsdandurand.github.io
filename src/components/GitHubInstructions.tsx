
import { useState } from "react";
import { X } from "lucide-react";

const GitHubInstructions = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-md border border-gray-200 z-50">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-gray-900">GitHub Connection Guide</h3>
        <button 
          onClick={() => setIsVisible(false)} 
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={18} />
        </button>
      </div>
      
      <div className="text-sm text-gray-600 space-y-2">
        <p>To connect this project to GitHub:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Go to <strong>Project Settings</strong> (gear icon)</li>
          <li>Select <strong>Integrations</strong> tab</li>
          <li>Under GitHub section, click <strong>Create Repository</strong></li>
          <li>Name your repository and click <strong>Create</strong></li>
          <li>Once created, you can clone and edit locally</li>
        </ol>
        <p className="mt-2 italic">Note: If you don't see these options, please contact Lovable support</p>
      </div>
    </div>
  );
};

export default GitHubInstructions;
