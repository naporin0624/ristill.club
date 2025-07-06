import { NotFound as NotFoundContent } from "./_components/notfound";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "ページが見つかりません | おてぃるふぁんくらぶ！",
	description: "お探しのページが見つかりませんでした。URLをご確認いただくか、トップページからお探しください。",
};

const NotFound = () => {
	return <NotFoundContent />;
};

export default NotFound;
