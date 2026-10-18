import type { TeamMember } from "./types";

/** メンバーを追加する場合は同じ形式で配列に追加する。 */
export const team: TeamMember[] = [
  {
    id: "kuwako-eri",
    kind: "person",
    name: "桑子英里",
    role: "DRRTVキャスター／防災企画",
    bio: "防災士としての知識を活かし、番組のテーマ検討、情報の確認、解説内容の構成から出演までを担当。視聴者と同じ目線で疑問に向き合い、備えにつながる情報を伝えます。",
    photo: null,
    mark: "桑",
  },
  {
    id: "wondervogel",
    kind: "organization",
    name: "WONDERVOGEL",
    role: "企画・制作・運営",
    bio: "「企画と言葉と表現」を軸に、番組の企画・演出、映像・デザイン制作、配信、事業運営を担当。防災への関心を広げ、日常の行動へつなげるコンテンツをつくります。",
    photo: null,
    mark: "W",
  },
];
