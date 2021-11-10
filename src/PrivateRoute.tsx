import React from 'react'
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom'

type PrivateRouteProps = RouteProps & {
    auth: () => boolean
    render: (props: RouteComponentProps<any>) => React.ReactNode
    renderNoAuth: (props: RouteComponentProps<any>) => React.ReactNode
}

export const PrivateRoute = (props: PrivateRouteProps) => {
    return (
        <Route
            {...{
                ...props,
                render: renderProps => (props.auth() ? props.render(renderProps) : props.renderNoAuth(renderProps)),
            }}
        />
    )
}
