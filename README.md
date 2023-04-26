## 串接智能合約實戰
KryptoCamp NFT 即將開賣！
智能合約已完成並部署至測試鏈上，你能幫 KryptoCamp 完成販賣 NFT 網站嗎？
在網站上線前，總共需要完成三個功能
![](https://i.imgur.com/WLDl3e2.jpg)

## 作業規格
1. 使用者可以連接錢包
2. 讀取智能合約的 totalSupply（目前被購買幾個NFT），並顯示畫面上
3. 點擊 mint 按鈕，會呼叫智能合約的 mint Function，讓使用者可以購買 NFT

## 作業詳細說明
1. 本作業採 React + Vite + thirdweb 方式，需用 git clone 下來後並安裝相依套件，在本地上跑 localhost

```bash
git clone git@github.com:Krypto-Camp/kryptocamp-nft.git // 須設定 github ssh key
cd kryptocamp-nft // 移動到專案 
yarn // 安裝相依套件
yarn dev // 開啟本地 localhost
yarn build // 打包，設定部署到正式環境時需執行此指令
```

2. 智能合約已部署至 Goerli 測試鏈上，智能合約程式碼在 `contract/KryptoCampNft.sol`
3. 前端畫面已刻完，請全域搜尋 TODO:
4. 若對 git 不熟的同學，請再回到平台複習 git 相關影片
6. 會實測專案，確認是否可完成基本功能
7. 部署部分可部署至 Vercel

#### 繳交作業
提醒，作業標題：請填寫你的學號 （Discord KryptoCamp 的名稱），例：Hazel | C0031601

以 Hackmd 方式繳交
- 提供你的 github 連結：
- 若有部署前端，請提交你的網址：
