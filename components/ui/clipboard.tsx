import React, { useEffect, useRef, useState } from 'react';

import { CopyCheckIcon, CopyIcon } from 'lucide-react';
import { useCopyToClipboard, useTimeout } from 'usehooks-ts';

type ClipboardProps = {
  content: string;
  className?: string;
  size?: 'lg' | 'md' | 'sm';
};

export const Clipboard: React.FC<ClipboardProps> = ({
  content,
  size = 'md',
}) => {
  const [value, copy] = useCopyToClipboard();

  const [copied, setCopied] = useState(false);

  useTimeout(
    () => {
      setCopied(false);
    },
    copied ? 2000 : null
  );

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        copy(content)
          .then(() => setCopied(true))
          .catch(() => setCopied(false));
      }}
      className={`cursor-pointer ${copied ? 'text-primary' : ''}`}
    >
      {copied ? (
        <CopyCheckIcon width={size === 'md' ? 16 : size === 'lg' ? 20 : 12} />
      ) : (
        <CopyIcon width={size === 'md' ? 16 : size === 'lg' ? 20 : 12} />
      )}
    </div>
  );
};
