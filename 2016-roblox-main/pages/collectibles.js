import React from "react";
import Head from "next/head";
import { createUseStyles } from "react-jss";
import Theme2016 from "../components/theme2016";
import MainWrapper from "../components/mainWrapper";
import { getUserInfo } from "../services/users";
import { getCollectibleInventory } from "../services/inventory";

const useStyles = createUseStyles({
  page: {
    maxWidth: "970px!important",
    paddingTop: 0,
  },
  card: {
    background: "#1e232c",
    border: "1px solid #2d3440",
    borderRadius: 6,
    padding: 18,
    color: "#e9edf3",
    boxShadow: "0 10px 26px rgba(0, 0, 0, 0.25)",
    width: "100%",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 700,
    margin: "0 0 12px 0",
    color: "#ffffff",
  },
  topGrid: {
    display: "grid",
    gridTemplateColumns: "290px 1fr",
    gap: 16,
    "@media(max-width: 991px)": {
      display: "block",
    },
  },
  leftCard: {
    background: "#252c37",
    border: "1px solid #343d4a",
    borderRadius: 4,
    padding: 16,
    marginBottom: 14,
  },
  userName: {
    fontSize: 42,
    fontWeight: 600,
    lineHeight: "1em",
    marginBottom: 10,
    color: "#ffffff",
    textTransform: "lowercase",
    textAlign: "left",
  },
  avatar: {
    width: "100%",
    maxWidth: 220,
    display: "block",
    margin: "0 auto",
  },
  rapLabel: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: 1,
    textAlign: "left",
    color: "#aeb7c5",
    marginBottom: 4,
  },
  totalRap: {
    fontWeight: 700,
    marginTop: 4,
    marginBottom: 0,
    fontSize: 38,
    textAlign: "left",
    color: "#ffffff",
    "@media(max-width: 767px)": {
      fontSize: 24,
    },
  },
  collectiblesCard: {
    background: "#252c37",
    border: "1px solid #343d4a",
    borderRadius: 4,
    minHeight: 250,
    padding: 16,
  },
  infoLeadWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
    "@media(max-width: 640px)": {
      display: "block",
    },
  },
  infoLead: {
    margin: 0,
    color: "#aeb7c5",
    fontSize: 15,
  },
  countText: {
    margin: 0,
    color: "#aeb7c5",
    fontSize: 14,
  },
  empty: {
    textAlign: "center",
    marginTop: 8,
    color: "#aeb7c5",
    padding: "28px 10px",
    border: "1px dashed #3b4555",
    borderRadius: 4,
  },
  grid: {
    marginTop: 0,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
    "@media(max-width: 1400px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    "@media(max-width: 640px)": {
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    },
  },
  itemCard: {
    background: "#2b3340",
    border: "1px solid #3b4555",
    borderRadius: 4,
    overflow: "hidden",
    height: "100%",
    position: "relative",
  },
  thumbWrap: {
    position: "relative",
    background: "#1b1f27",
    borderBottom: "1px solid #3b4555",
  },
  limitedTag: {
    position: "absolute",
    left: 8,
    bottom: 8,
    background: "#1fb15d",
    color: "#ffffff",
    fontSize: 11,
    fontWeight: 700,
    lineHeight: "16px",
    padding: "0 7px",
    textTransform: "uppercase",
    borderRadius: 2,
  },
  itemImage: {
    width: "100%",
    display: "block",
  },
  itemBody: {
    padding: 10,
  },
  line: {
    margin: "0 0 2px 0",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: 13,
    color: "#e9edf3",
  },
  price: {
    margin: 0,
    color: "#1fb15d",
    fontWeight: 700,
    fontSize: 18,
  },
  error: {
    color: "#dc3545",
    marginBottom: 0,
  },
});

const CollectiblesPage = ({ userId, username, totalRap, inventory, errorMessage }) => {
  const s = useStyles();

  return (
    <Theme2016>
      <Head>
        <title>{username ? `${username}'s Collectibles - Zekoro` : "Collectibles - Zekoro"}</title>
      </Head>
      <MainWrapper>
        <div className={`container ${s.page}`}>
          <div className="row mb-4">
            <div className="col-12">
              <div className={s.card}>
                {errorMessage ? (
                  <p className={s.error}>{errorMessage}</p>
                ) : (
                  <>
                    <h2 className={s.sectionTitle}>Collectibles</h2>
                    <div className={s.topGrid}>
                      <div>
                        <div className={s.leftCard}>
                          <h1 className={s.userName}>{username}</h1>
                          <img
                            className={s.avatar}
                            src={`/thumbs/avatar.ashx?userId=${userId}`}
                            alt={`${username} avatar`}
                          />
                        </div>
                        <div className={s.leftCard}>
                          <p className={s.rapLabel}>Total RAP</p>
                          <p className={s.totalRap}>{Number(totalRap || 0).toLocaleString()}</p>
                        </div>
                      </div>
                      <div className={s.collectiblesCard}>
                        <div className={s.infoLeadWrap}>
                          <p className={s.infoLead}>Collectibles</p>
                          <p className={s.countText}>
                            {inventory.length === 0
                              ? "Showing 0 collectible items."
                              : `Showing ${inventory.length.toLocaleString()} collectible item${inventory.length === 1 ? "" : "s"}.`}
                          </p>
                        </div>
                        {inventory.length === 0 ? (
                          <p className={s.empty}>Player does not have any collectible items.</p>
                        ) : (
                          <div className={s.grid}>
                            {inventory.map((item, index) => {
                              const assetId = item.assetId || item.asset_id;
                              const serial = item.serialNumber || item.serial;
                              const serialCount = item.serialCount || item.serial_count;
                              const uaid = item.userAssetId || item.user_asset_id;
                              const rap = item.recentAveragePrice || item.recent_average_price || 0;
                              return (
                                <div key={`${assetId}-${uaid || serial || index}`}>
                                  <div className={s.itemCard}>
                                    <a href={`/catalog/${assetId}/--`}>
                                      <div className={s.thumbWrap}>
                                        <img className={s.itemImage} src={`/thumbs/asset.ashx?assetId=${assetId}`} alt={item.name || `Asset ${assetId}`} />
                                        <span className={s.limitedTag}>Limited</span>
                                      </div>
                                    </a>
                                    <div className={s.itemBody}>
                                      <p className={s.line}><b>{item.name || `Asset ${assetId}`}</b></p>
                                      <p className={s.price}>R${Number(rap).toLocaleString()}</p>
                                      {serial != null ? (
                                        <p className={s.line}>Serial: #{serial} of {serialCount || "-"}</p>
                                      ) : (
                                        <p className={s.line}>UAID: {uaid || "-"}</p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </Theme2016>
  );
};

export async function getServerSideProps(context) {
  const rawUserId = context?.query?.userId;
  const userId = Number(rawUserId);
  if (!Number.isSafeInteger(userId) || userId < 1) {
    return {
      props: {
        userId: null,
        username: "",
        totalRap: 0,
        inventory: [],
        errorMessage: "User ID is invalid or does not exist.",
      },
    };
  }

  try {
    const userInfo = await getUserInfo({ userId });
    const username = userInfo?.name || userInfo?.username || `User ${userId}`;
    let cursor = "";
    let runs = 0;
    let all = [];
    while (runs < 50) {
      runs++;
      const page = await getCollectibleInventory({ userId, cursor, limit: 100 });
      const data = page?.data || [];
      all = all.concat(data);
      if (!page?.nextPageCursor) break;
      cursor = page.nextPageCursor;
    }
    all.sort((a, b) => {
      const aRap = a?.recentAveragePrice || 0;
      const bRap = b?.recentAveragePrice || 0;
      return bRap - aRap;
    });
    const totalRap = all.reduce((sum, item) => sum + (item?.recentAveragePrice || 0), 0);
    return {
      props: {
        userId,
        username,
        totalRap,
        inventory: all,
        errorMessage: null,
      },
    };
  } catch (e) {
    return {
      props: {
        userId,
        username: "",
        totalRap: 0,
        inventory: [],
        errorMessage: "You don't have permissions to view the specified user's inventory",
      },
    };
  }
}

export default CollectiblesPage;
