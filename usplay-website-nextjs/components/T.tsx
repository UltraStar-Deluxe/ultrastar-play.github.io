import { Trans } from "next-i18next"

const T = (props: { i18nKey: string, values?: {} })  =>
{
    return <Trans i18nKey={ props.i18nKey }
                  components={{
                    gradient: <span className="text-gradient bold" />,
                    emphasize: <span className="emphasize" />,
                    a: <a /> }}
                  transKeepBasicHtmlNodesFor={ ["i", "b", "u", "del", "br", "p"] }
                  shouldUnescape={ true }
                  values={props.values}></Trans>
}

export { T }