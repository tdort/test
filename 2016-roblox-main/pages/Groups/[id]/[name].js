import React from "react";
import Head from "next/head";
import MyGroups from "../../../components/myGroups";
import GroupPageStore from "../../../components/myGroups/stores/groupPageStore";
import MyGroupsStore from "../../../components/myGroups/stores/myGroupsStore";
import { getInfo } from "../../../services/groups";
import { multiGetGroupIcons } from "../../../services/thumbnails";

const GroupEmbedPage = ({ groupId, groupName, description, ogImage }) => {
    const ogTitle = groupName || "Zekoro Group";
    const ogDescription = description || "Join the Zekoro community.";
    const ogUrl = groupId ? `https://zekoro.org/groups/${groupId}/${encodeURIComponent(groupName || "group").replace(/%20/g, "-")}` : "https://zekoro.org";
    const embedImage = ogImage || "https://zekoro.org/img/group.png";

    return (
        <>
            <Head>
                <title>{ogTitle} - Zekoro</title>
                <meta property="og:title" content={ogTitle} />
                <meta property="og:url" content={ogUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content={embedImage} />
                <meta property="og:image:secure_url" content={embedImage} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="420" />
                <meta property="og:image:height" content="420" />
                <meta property="og:site_name" content="Zekoro" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={ogTitle} />
                <meta name="twitter:description" content={ogDescription} />
                <meta name="twitter:image" content={embedImage} />
                <meta name="theme-color" content="#1188ff" />
            </Head>
            <MyGroupsStore.Provider>
                <GroupPageStore.Provider>
                    <MyGroups id={groupId} />
                </GroupPageStore.Provider>
            </MyGroupsStore.Provider>
        </>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    const groupId = Number(id);
    const imageVersion = Date.now();
    context.res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    context.res.setHeader('Pragma', 'no-cache');
    context.res.setHeader('Expires', '0');

    try {
        const info = await getInfo({ groupId });
        const iconData = await multiGetGroupIcons({ groupIds: [groupId] });
        const ogImage = iconData?.[0]?.imageUrl
            ? `${iconData[0].imageUrl}${iconData[0].imageUrl.includes("?") ? "&" : "?"}cacheBust=${imageVersion}`
            : "https://zekoro.org/img/group.png";
        return {
            props: {
                groupId,
                groupName: info?.name || "Zekoro Group",
                description: info?.description || "Join the Zekoro community.",
                ogImage,
            }
        };
    } catch (error) {
        console.error("Error fetching group info for embeds", error);
        return {
            props: {
                groupId,
                groupName: "Zekoro Group",
                description: "Join the Zekoro community.",
                ogImage: "https://zekoro.org/img/group.png",
            }
        };
    }
}

export default GroupEmbedPage;
