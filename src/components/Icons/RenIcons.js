import { SvgIcon, SvgIconProps } from "@material-ui/core";
import { SvgIconComponent } from "@material-ui/icons";
import React, { FunctionComponent } from "react";
import { getScalingProps } from "../../utils/getScalingProps";
import { ReactComponent as AvalancheChain } from "../assets/icons/avalanche-chain.svg";
import { ReactComponent as AvalancheChainCircle } from "../assets/icons/avalanche-chain-circle-icon.svg";
import { ReactComponent as AvaCircle } from "../assets/icons/avalanche-circle-icon.svg";
import { ReactComponent as Ava } from "../assets/icons/avalanche-colour-icon.svg";
import { ReactComponent as AvaFull } from "../assets/icons/avalanche-icon.svg";
import { ReactComponent as BackArrow } from "../assets/icons/back-arrow.svg";
import { ReactComponent as Beta } from "../assets/icons/icon-beta.svg";
import { ReactComponent as Bch } from "../assets/icons/bch-icon-nocolour.svg";
import { ReactComponent as BchDashed } from "../assets/icons/tokens/bitcoin-cash-dashed-icon.svg";
import { ReactComponent as BchFull } from "../assets/icons/bch-icon.svg";
import { ReactComponent as BchGrey } from "../assets/icons/bch-icon-grey.svg";
import { ReactComponent as BinanceChainFull } from "../assets/icons/binancesmartchain-circle-icon.svg";
import { ReactComponent as BinanceChainColor } from "../assets/icons/binancesmartchain-colour-icon.svg";
import { ReactComponent as BinanceChain } from "../assets/icons/binancesmartchain-icon.svg";
import { ReactComponent as ArbitrumCircle } from "../assets/icons/arbitrum-circle.svg";
import { ReactComponent as ArbitrumColor } from "../assets/icons/arbitrum-color.svg";
import { ReactComponent as ArbitrumBlack } from "../assets/icons/arbitrum-black.svg";
import { ReactComponent as BitcoinInCircle } from "../assets/icons/bitcoin-in-circle.svg";
import { ReactComponent as BrowserNotifications } from "../assets/icons/browser-notifications.svg";
import { ReactComponent as Bitcoin } from "../assets/icons/btc-icon-only.svg";
import { ReactComponent as Btc } from "../assets/icons/btc-icon-nocolour.svg";
import { ReactComponent as BtcDashed } from "../assets/icons/tokens/bitcoin-dashed-icon.svg";
import { ReactComponent as BtcFull } from "../assets/icons/btc-icon.svg";
import { ReactComponent as BtcGrey } from "../assets/icons/btc-icon-grey.svg";
import { ReactComponent as EmptyCircle } from "../assets/icons/empty-circle-icon.svg";
import { ReactComponent as Empty } from "../assets/icons/empty-icon.svg";
import { ReactComponent as DgbGrey } from "../assets/icons/dgb-icon-grey.svg";
import { ReactComponent as Dgb } from "../assets/icons/dgb-icon-nocolour.svg";
import { ReactComponent as DgbDashed } from "../assets/icons/tokens/digibyte-dashed-icon.svg";
import { ReactComponent as DgbFull } from "../assets/icons/dgb-icon.svg";
import { ReactComponent as DogeGrey } from "../assets/icons/doge-icon-grey.svg";
import { ReactComponent as Doge } from "../assets/icons/doge-icon-nocolour.svg";
import { ReactComponent as DogeDashed } from "../assets/icons/tokens/dogecoin-dashed-icon.svg";
import { ReactComponent as DogeFull } from "../assets/icons/doge-icon.svg";
import { ReactComponent as DotsGrey } from "../assets/icons/dots-icon-grey.svg";
import { ReactComponent as Dots } from "../assets/icons/dots-icon-nocolour.svg";
import { ReactComponent as DotsFull } from "../assets/icons/dots-icon.svg";
import { ReactComponent as Ethereum } from "../assets/icons/eth-icon-only.svg";
import { ReactComponent as EthereumChainFull } from "../assets/icons/ethereum-circle-icon.svg";
import { ReactComponent as EthereumChainColor } from "../assets/icons/ethereum-colour-icon.svg";
import { ReactComponent as Fil } from "../assets/icons/fil-icon-nocolour.svg";
import { ReactComponent as FilDashed } from "../assets/icons/tokens/filecoin-dashed-icon.svg";
import { ReactComponent as FilGrey } from "../assets/icons/fil-icon-grey.svg";
import { ReactComponent as FilFull } from "../assets/icons/fil-icon.svg";
import { ReactComponent as Fantom } from "../assets/icons/fantom-icon.svg";
import { ReactComponent as FantomFull } from "../assets/icons/fantom-colour-icon.svg";
import { ReactComponent as FantomCircle } from "../assets/icons/fantom-circle-icon.svg";
import { ReactComponent as Gateway } from "../assets/icons/gateway-icon.svg";
import { ReactComponent as LunaGrey } from "../assets/icons/luna-icon-grey.svg";
import { ReactComponent as Luna } from "../assets/icons/luna-icon-nocolour.svg";
import { ReactComponent as LunaDashed } from "../assets/icons/tokens/luna-dashed-icon.svg";
import { ReactComponent as LunaFull } from "../assets/icons/luna-icon.svg";
import { ReactComponent as MetamaskFox } from "../assets/icons/metamask-fox.svg";
import { ReactComponent as MetamaskFull } from "../assets/icons/metamask-icon-colour.svg";
import { ReactComponent as MewFull } from "../assets/icons/mew-icon.svg";
import { ReactComponent as NavigateNext } from "../assets/icons/chevron-icon-right.svg";
import { ReactComponent as NavigatePrev } from "../assets/icons/chevron-icon-left.svg";
import { ReactComponent as QrCode } from "../assets/icons/qr-code.svg";
import { ReactComponent as RenLogo } from "../assets/icons/ren-logo.svg";
import { ReactComponent as RenLogo3F } from "../assets/icons/ren-logo-3f.svg";
import { ReactComponent as RenVMLogo } from "../assets/icons/renvm-logo.svg";
import { ReactComponent as RenBridgeLogo } from "../assets/icons/renbridge-logo.svg";
import { ReactComponent as Success } from "../assets/icons/success-icon.svg";
import { ReactComponent as SpecialAlert } from "../assets/icons/specialalert-icon.svg";
import { ReactComponent as Tooltip } from "../assets/icons/tooltip.svg";
import { ReactComponent as TxHistory } from "../assets/icons/tx-history.svg";
import { ReactComponent as TxSettings } from "../assets/icons/tx-settings.svg";
import { ReactComponent as WalletConnectFull } from "../assets/icons/walletconnect-icon-colour.svg";
import { ReactComponent as Wallet } from "../assets/icons/wallet-icon.svg";
import { ReactComponent as WalletConnect } from "../assets/icons/walletconnect-icon.svg";
import { ReactComponent as Zec } from "../assets/icons/zec-icon-nocolour.svg";
import { ReactComponent as ZecDashed } from "../assets/icons/tokens/zcash-dashed-icon.svg";
import { ReactComponent as ZecGrey } from "../assets/icons/zec-icon-grey.svg";
import { ReactComponent as ZecFull } from "../assets/icons/zec-icon.svg";
import { ReactComponent as Polygon } from "../assets/icons/polygon-icon.svg";
import { ReactComponent as PolygonFull } from "../assets/icons/polygon-colour-icon.svg";
import { ReactComponent as PolygonCircle } from "../assets/icons/polygon-circle-icon.svg";
import { ReactComponent as Solana } from "../assets/icons/solana-icon.svg";
import { ReactComponent as SolanaFull } from "../assets/icons/solana-colour-icon.svg";
import { ReactComponent as SolanaCircle } from "../assets/icons/solana-circle-icon.svg";
import { ReactComponent as Sollet } from "../assets/icons/sollet.svg";
import { ReactComponent as Phantom } from "../assets/icons/phantom-icon-purple.svg";

import AddIcon from "@material-ui/icons/Add";
import BlockIcon from "@material-ui/icons/Block";
import CompletedIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import HomeIcon from "@material-ui/icons/Home";
import WarningIcon from "@material-ui/icons/Warning";
import LanguageIcon from "@material-ui/icons/Language";
import CheckedIcon from "@material-ui/icons/Check";
import SyncProblemIcon from "@material-ui/icons/SyncProblem";

export {
  CompletedIcon,
  BlockIcon,
  AddIcon,
  DeleteIcon,
  WarningIcon,
  HomeIcon,
  LanguageIcon,
  CheckedIcon,
  SyncProblemIcon,
};

export const EmptyCircleIcon = (props) => (
  <SvgIcon component={EmptyCircle} {...props} />
);

export const EmptyIcon = (props) => (
  <SvgIcon component={Empty} {...props} />
);

export const TxHistoryIcon = (props) => (
  <SvgIcon component={TxHistory} {...props} />
);

export const TxSettingsIcon = (props) => (
  <SvgIcon component={TxSettings} {...props} />
);

export const TooltipIcon = (props) => (
  <SvgIcon component={Tooltip} {...props} />
);

export const WalletIcon = (props) => (
  <SvgIcon component={Wallet} {...props} />
);

export const BackArrowIcon = (props) => (
  <SvgIcon component={BackArrow} {...props} />
);

export const NavigatePrevIcon = (props) => (
  <SvgIcon component={NavigatePrev} {...props} />
);

export const NavigateNextIcon = (props) => (
  <SvgIcon component={NavigateNext} {...props} />
);

export const SuccessIcon = (props) => (
  <SvgIcon component={Success} {...props} />
);

export const SpecialAlertIcon = (props) => (
  <SvgIcon component={SpecialAlert} {...props} />
);

export const QrCodeIcon = (props) => (
  <SvgIcon component={QrCode} {...props} />
);

export const GatewayIcon = (props) => (
  <SvgIcon component={Gateway} {...props} />
);

export const BrowserNotificationsIcon = (props) => (
  <SvgIcon component={BrowserNotifications} {...props} />
);

export const BitcoinIcon = (props) => (
  <SvgIcon component={Bitcoin} {...props} />
);

export const EthereumIcon = (props) => (
  <SvgIcon component={Ethereum} {...props} />
);

export const BetaIcon = (props) => {
  const scalingProps = getScalingProps(47, 24);
  return <SvgIcon component={Beta} {...scalingProps} {...props} />;
};

export const RenBridgeLogoIcon = (props) => {
  const scalingProps = getScalingProps(115, 23);
  return <SvgIcon component={RenBridgeLogo} {...scalingProps} {...props} />;
};

export const RenLogoIcon = (props) => {
  const scalingProps = getScalingProps(24, 27);
  return <SvgIcon component={RenLogo} {...scalingProps} {...props} />;
};

export const RenVMLogoIcon = (props) => {
  const scalingProps = getScalingProps(124, 29);
  return <SvgIcon component={RenVMLogo} {...scalingProps} {...props} />;
};

export const RenLogoFullIcon = (props) => {
  const scalingProps = getScalingProps(121, 52);
  return <SvgIcon component={RenLogo3F} {...scalingProps} {...props} />;
};

export const BitcoinInCircleIcon = (props) => (
  <SvgIcon component={BitcoinInCircle} viewBox="0 0 64 64" {...props} />
);

export const MetamaskFoxIcon = (props) => (
  <SvgIcon component={MetamaskFox} viewBox="0 0 34 32" {...props} />
);

export const MetamaskFullIcon = (props) => (
  <SvgIcon component={MetamaskFull} {...props} />
);

export const MewFullIcon = (props) => (
  <SvgIcon component={MewFull} viewBox="0 0 86 104" {...props} />
);

export const WalletConnectFullIcon = (props) => (
  <SvgIcon component={WalletConnectFull} {...props} />
);

export const WalletConnectIcon = (props) => (
  <SvgIcon component={WalletConnect} {...props} />
);

export const ArbitrumCircleIcon = (props) => (
  <SvgIcon component={ArbitrumCircle} {...props} />
);

export const ArbitrumBlackIcon = (props) => {
  return <SvgIcon component={ArbitrumBlack} {...props} />;
};

export const ArbitrumColorIcon = (props) => {
  return <SvgIcon component={ArbitrumColor} {...props} />;
};

export const AvalancheChainIcon = (props) => {
  const scalingProps = getScalingProps(693.26, 257.79);
  return <SvgIcon component={AvalancheChain} {...scalingProps} {...props} />;
};

export const AvalancheChainCircleIcon = (props) => {
  const scalingProps = getScalingProps(960, 960);
  return (
    <SvgIcon component={AvalancheChainCircle} {...scalingProps} {...props} />
  );
};

export const BinanceChainIcon = (props) => (
  <SvgIcon component={BinanceChain} {...props} />
);

export const BinanceChainFullIcon = (props) => {
  return <SvgIcon component={BinanceChainFull} {...props} />;
};

export const BinanceChainColorIcon = (props) => {
  return <SvgIcon component={BinanceChainColor} {...props} />;
};

export const EthereumChainIcon = (props) => {
  return <SvgIcon component={EthereumIcon} {...props} />;
};

export const EthereumChainFullIcon = (props) => {
  return <SvgIcon component={EthereumChainFull} {...props} />;
};

export const EthereumChainColorIcon = (props) => {
  return <SvgIcon component={EthereumChainColor} {...props} />;
};

export const BtcIcon = (props) => (
  <SvgIcon component={Btc} {...props} />
);

export const BtcDashedIcon = (props) => (
  <SvgIcon component={BtcDashed} {...getScalingProps(274)} {...props} />
);

export const BtcGreyIcon = (props) => (
  <SvgIcon component={BtcGrey} {...props} />
);

export const BtcFullIcon = (props) => (
  <SvgIcon component={BtcFull} {...props} />
);

export const BchIcon = (props) => (
  <SvgIcon component={Bch} {...props} />
);

export const BchDashedIcon = (props) => (
  <SvgIcon component={BchDashed} {...getScalingProps(256)} {...props} />
);

export const BchFullIcon = (props) => (
  <SvgIcon component={BchFull} {...props} />
);

export const BchGreyIcon = (props) => (
  <SvgIcon component={BchGrey} {...props} />
);

export const DogeIcon = (props) => (
  <SvgIcon component={Doge} {...props} />
);

export const DogeDashedIcon = (props) => (
  <SvgIcon component={DogeDashed} {...getScalingProps(256)} {...props} />
);

export const DogeFullIcon = (props) => (
  <SvgIcon component={DogeFull} {...props} />
);

export const DogeGreyIcon = (props) => (
  <SvgIcon component={DogeGrey} {...props} />
);

export const ZecIcon = (props) => (
  <SvgIcon component={Zec} {...props} />
);

export const ZecDashedIcon = (props) => (
  <SvgIcon component={ZecDashed} {...getScalingProps(256)} {...props} />
);

export const ZecFullIcon = (props) => (
  <SvgIcon component={ZecFull} {...props} />
);

export const ZecGreyIcon = (props) => (
  <SvgIcon component={ZecGrey} {...props} />
);

export const DgbIcon = (props) => (
  <SvgIcon component={Dgb} {...props} />
);

export const DgbDashedIcon = (props) => (
  <SvgIcon component={DgbDashed} {...getScalingProps(256)} {...props} />
);

export const DgbFullIcon = (props) => (
  <SvgIcon component={DgbFull} {...props} />
);

export const DgbGreyIcon = (props) => (
  <SvgIcon component={DgbGrey} {...props} />
);

export const DotsIcon = (props) => (
  <SvgIcon component={Dots} {...props} />
);

export const DotsFullIcon = (props) => (
  <SvgIcon component={DotsFull} {...props} />
);

export const DotsGreyIcon = (props) => (
  <SvgIcon component={DotsGrey} {...props} />
);

export const LunaIcon = (props) => (
  <SvgIcon component={Luna} {...props} />
);

export const LunaDashedIcon = (props) => (
  <SvgIcon component={LunaDashed} {...getScalingProps(256)} {...props} />
);

export const LunaFullIcon = (props) => (
  <SvgIcon component={LunaFull} {...props} />
);

export const LunaGreyIcon = (props) => (
  <SvgIcon component={LunaGrey} {...props} />
);

export const FilIcon = (props) => (
  <SvgIcon component={Fil} {...props} />
);

export const FilDashedIcon = (props) => (
  <SvgIcon component={FilDashed} {...getScalingProps(256)} {...props} />
);

export const FilFullIcon = (props) => (
  <SvgIcon component={FilFull} {...props} />
);

export const FilGreyIcon = (props) => (
  <SvgIcon component={FilGrey} {...props} />
);

export const PolygonGreyIcon = (props) => (
  <SvgIcon component={Polygon} {...props} />
);

export const PolygonFullIcon = (props) => (
  <SvgIcon component={PolygonFull} {...props} />
);

export const PolygonCircleIcon = (props) => (
  <SvgIcon component={PolygonCircle} {...props} />
);

export const FantomGreyIcon = (props) => (
  <SvgIcon component={Fantom} {...props} />
);

export const FantomFullIcon = (props) => (
  <SvgIcon component={FantomFull} {...props} />
);

export const FantomCircleIcon = (props) => (
  <SvgIcon component={FantomCircle} {...props} />
);

export const AvaIcon = (props) => (
  <SvgIcon component={Fantom} {...props} />
);

export const AvaGreyIcon = (props) => (
  <SvgIcon component={AvaFull} {...props} />
);

export const AvaFullIcon = (props) => (
  <SvgIcon component={Ava} {...props} />
);

export const AvaCircleIcon = (props) => (
  <SvgIcon component={AvaCircle} {...props} />
);

export const SolanaIcon = (props) => (
  <SvgIcon component={Fantom} {...props} />
);

export const SolanaGreyIcon = (props) => (
  <SvgIcon component={SolanaFull} {...props} />
);

export const SolanaFullIcon = (props) => (
  <SvgIcon component={Solana} {...props} />
);

export const SolanaCircleIcon = (props) => (
  <SvgIcon component={SolanaCircle} {...props} />
);

export const PhantomFullIcon = (props) => (
  <SvgIcon viewBox="0 0 128 128" component={Phantom} {...props} />
);

export const SolletFullIcon = (props) => (
  <SvgIcon viewBox="0 0 100 100" component={Sollet} {...props} />
);
