import { Post } from '../../interfaces/post.interfaces';

export interface ComposeFormSchema {
	text?: string;
}

export interface ComposeFormProps {
	hiddenActions?: boolean;
	disableClickToFocus?: boolean;
	emojiPanelZIndex?: number;
	onCompose?: () => void;
	quotingPostId?: string;
	snapFocus?: boolean;
}

