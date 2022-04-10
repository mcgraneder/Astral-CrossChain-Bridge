import { LinksGroup, DenseNavLinks } from "./NavLinkGroupStyles"

const links = [

    {
        to: "/bridge",
        icon: "fas fa-wallet",
        label: "Bridge"
    },
    {
        to: "/wallet",
        icon: "fa fa-exchange",
        label: "Wallet"
    },
    {
        to: "/dex",
        icon: "fa fa-history",
        label: "Trade"
    },
    {
        to: "/transactions",
        icon: "fas fa-coins",
        label: "History"
    },
]


const NavLinksGroup = (props) => {

    return (

        <LinksGroup {...props}>
            {links.map(l => <DenseNavLinks compact={props.compact} key={l.to} to={l.to} iconName={l.icon} label={l.label}></DenseNavLinks>)}
        </LinksGroup>
    )
}

export default NavLinksGroup