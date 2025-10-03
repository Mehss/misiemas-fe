import { lazy } from 'react'

const Home = lazy(() => import('~/pages/Home'))
const Dashboard = lazy(() => import('~/pages/Dashboard'))
const Project = lazy(() => import('~/pages/MainMenu'))
const Disciplines = lazy(() => import('~/pages/SubMenu'))
const ChartPbi = lazy(() => import('~/pages/ChartPbi'))

export default [
  {
    id: 'home',
    title: 'Home',
    path: '/home',
    component: Home,
    exact: false,
    disabled: false,
    hasAppbarTab: true,
    showOnMenu: true,
    withNavbar: true,
    withSidebar: true
  },
  {
    id: 'dct',
    title: 'DCT',
    path: '/dct',
    component: Dashboard,
    exact: true,
    disabled: false,
    hasAppbarTab: true,
    showOnMenu: true,
    withNavbar: true,
    withSidebar: true
  },
  // {
  //   id: 'structure-erection-progress-summary',
  //   title: 'Structure Erection Progress Summary',
  //   path: '/:projectName/construction/structure-erection/progress-summary',
  //   component: StructErProgressSummary,
  //   exact: true,
  //   disabled: false,
  //   hasAppbarTab: true,
  //   showOnMenu: true,
  //   withNavbar: true,
  //   withSidebar: true
  // },
  // {
  //   id: 'structure-erection-forecast',
  //   title: 'Structure Erection Forecast',
  //   path: '/:projectName/construction/structure-erection/forecast',
  //   component: StructErForecast,
  //   exact: true,
  //   disabled: false,
  //   hasAppbarTab: true,
  //   showOnMenu: true,
  //   withNavbar: true,
  //   withSidebar: true
  // },
  // {
  //   id: 'structure-erection-production-analysis',
  //   title: 'Structure Erection Production Analysis',
  //   path: '/:projectName/construction/structure-erection/production-analysis',
  //   component: StructErProductionAnalysis,
  //   exact: true,
  //   disabled: false,
  //   hasAppbarTab: true,
  //   showOnMenu: true,
  //   withNavbar: true,
  //   withSidebar: true
  // },
  // {
  //   id: 'structure-erection-production-per-area',
  //   title: 'Structure Erection Production Per Area',
  //   path: '/:projectName/construction/structure-erection/production-analysis/area',
  //   component: StructErProductionPerArea,
  //   exact: true,
  //   disabled: false,
  //   hasAppbarTab: true,
  //   showOnMenu: true,
  //   withNavbar: true,
  //   withSidebar: true
  // },
  // {
  //   id: 'structure-erection-cycle-time-analysis',
  //   title: 'Structure Erection Cycle Time Analysis',
  //   path: '/:projectName/construction/structure-erection/production-analysis/cycle-time',
  //   component: StructErCycleTimeAnalysis,
  //   exact: true,
  //   disabled: false,
  //   hasAppbarTab: true,
  //   showOnMenu: true,
  //   withNavbar: true,
  //   withSidebar: true
  // },
  // {
  //   id: 'structure-erection-resource-analysis',
  //   title: 'Structure Erection Resource Analysis',
  //   path: '/:projectName/construction/structure-erection/production-analysis/resource',
  //   component: StructErResourceAnalysis,
  //   exact: true,
  //   disabled: false,
  //   hasAppbarTab: true,
  //   showOnMenu: true,
  //   withNavbar: true,
  //   withSidebar: true
  // },
  // {
  //   id: 'structure-erection-detail-production',
  //   title: 'Structure Erection Detail Production',
  //   path: '/:projectName/construction/structure-erection/detail-production',
  //   component: StructErDetailProduction,
  //   exact: true,
  //   disabled: false,
  //   hasAppbarTab: true,
  //   showOnMenu: true,
  //   withNavbar: true,
  //   withSidebar: true
  // },
  // {
  //   id: 'weather',
  //   title: 'Weather',
  //   path: '/:projectName/weather',
  //   component: Weather,
  //   exact: true,
  //   disabled: false,
  //   hasAppbarTab: true,
  //   showOnMenu: true,
  //   withNavbar: true,
  //   withSidebar: true
  // },
  // {
  //   id: 'construction',
  //   title: 'Construction',
  //   path: '/:projectName/construction',
  //   component: Disciplines,
  //   exact: true,
  //   disabled: false,
  //   hasAppbarTab: true,
  //   showOnMenu: true,
  //   withNavbar: true,
  //   withSidebar: true
  // },
  {
    id: 'selected-project',
    title: 'Selected Project',
    path: '/dct/:projectName',
    component: Project,
    exact: true,
    disabled: false,
    hasAppbarTab: true,
    showOnMenu: true,
    withNavbar: true,
    withSidebar: true
  },

  {
    id: 'category',
    title: 'Category Project',
    path: '/dct/:projectName/:category',
    component: Disciplines,
    exact: true,
    disabled: false,
    hasAppbarTab: true,
    showOnMenu: true,
    withNavbar: true,
    withSidebar: true
  },
  {
    id: 'sub-category',
    title: 'Summary Project',
    path: '/dct/:projectName/:category/:subCategory/:pageName',
    component: ChartPbi,
    exact: true,
    disabled: false,
    hasAppbarTab: true,
    showOnMenu: true,
    withNavbar: true,
    withSidebar: true
  },
  {
    id: 'summary',
    title: 'Summary Project',
    path: '/dct/:projectName/:category/:pageName',
    component: ChartPbi,
    exact: true,
    disabled: false,
    hasAppbarTab: true,
    showOnMenu: true,
    withNavbar: true,
    withSidebar: true
  },
]
