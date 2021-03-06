import {
    primary,
    secondary,
    smallDevice,
    mediumDevice,
    largeDevice,
    extraLargeDevice
} from './../../scss/app.scss';

export const APP_URL = window.location.origin
export const API_URL = APP_URL + '/api'
export const ADMIN_URL = APP_URL + '/admin'
export const APP_LOGOUT = APP_URL + '/logout'

export const ROUTES = {
    home: '/',
    skill: '/competences',
    projects: '/projets',
    project: '/projets/:slug',
}

export const API_LINKS = {
    links: API_URL + '/links',
    projects: API_URL + '/project_categories',
    project: API_URL + '/projects/'
}

export const COLORS = {
    primary: primary,
    secondary: secondary
}

export const BREAKPOINTS = {
    small: parseInt(smallDevice),
    medium: parseInt(mediumDevice),
    large: parseInt(largeDevice),
    extra_large: parseInt(extraLargeDevice)
}

export const MEDIUM_DEVICE_MIN_WIDTH = `(min-device-width: ${BREAKPOINTS.medium}px)`;
export const LARGE_DEVICE_MIN_WIDTH = `(min-device-width: ${BREAKPOINTS.large}px)`;
export const EXTRA_LARGE_DEVICE_MIN_WIDTH = `(min-device-width: ${BREAKPOINTS.extra_large}px)`;
