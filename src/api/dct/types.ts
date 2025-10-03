export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _Any: any;
  _FieldSet: any;
}

export type ActivityDate = {
  activityDate?: Maybe<Array<Scalars['String']>>;
  totalData?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
}

export type ConfigQuery = {
  FetchProject?: Maybe<FetchProjectResponse>;
  FetchWeather?: Maybe<FetchWeatherResponse>;
  FetchWeatherDateTime?: Maybe<WeatherDateTimeResp>;
  FetchWeatherForecast?: Maybe<WeatherForecastResponse>;
}


export type ConfigQueryFetchProjectArgs = {
  in?: InputMaybe<FetchProjectRequestInput>;
}


export type ConfigQueryFetchWeatherArgs = {
  in?: InputMaybe<FetchWeatherRequestInput>;
}


export type ConfigQueryFetchWeatherDateTimeArgs = {
  in?: InputMaybe<WeatherDateTimeReqInput>;
}


export type ConfigQueryFetchWeatherForecastArgs = {
  in?: InputMaybe<WeatherForecastRequestInput>;
}

export type ConstructionQuery = {
  FetchCutOffDate?: Maybe<CutOffDateResp>;
  FetchCycleAndStartTimeHistory?: Maybe<CycleAndStartTimeHistoryResp>;
  FetchCycleTime?: Maybe<CycleTimeResp>;
  FetchCycleTimeDate?: Maybe<CycleTimeDateResp>;
  FetchCycleTimeLocWorkingCat?: Maybe<CycleTimeLocWorkingCatResp>;
  FetchDetailProdCat?: Maybe<DetailProdCatResp>;
  FetchDetailProdDate?: Maybe<DetailProdDateResp>;
  FetchDetailProdLoc?: Maybe<DetailProdLocResp>;
  FetchDetailProdTime?: Maybe<DetailProdResp>;
  FetchDetailResourse?: Maybe<DetailResourseResp>;
  FetchEquipmentUtilization?: Maybe<EquipmentUtilizationResp>;
  FetchFilterEqUtil?: Maybe<FilterEqUtilResp>;
  FetchLocWorkingCat?: Maybe<LocWorkingCatResp>;
  FetchPerAreaWorkingCat?: Maybe<PerAreaWorkingCatResp>;
  FetchProdAnalysis?: Maybe<ProdAnalysisResp>;
  FetchProdPerArea?: Maybe<ProdPerAreaResp>;
  FetchProdSCurveAndHistory?: Maybe<ProdSCurveAndHistoryResp>;
  FetchProductionSummary?: Maybe<ProdSummaryResp>;
  FetchResource?: Maybe<ResourceResp>;
  FetchResourceDate?: Maybe<ResourceDateResp>;
}


export type ConstructionQueryFetchCutOffDateArgs = {
  in?: InputMaybe<CutOffDateReqInput>;
}


export type ConstructionQueryFetchCycleAndStartTimeHistoryArgs = {
  in?: InputMaybe<CycleAndStartTimeHistoryReqInput>;
}


export type ConstructionQueryFetchCycleTimeArgs = {
  in?: InputMaybe<CycleTimeReqInput>;
}


export type ConstructionQueryFetchCycleTimeDateArgs = {
  in?: InputMaybe<CycleTimeDateReqInput>;
}


export type ConstructionQueryFetchCycleTimeLocWorkingCatArgs = {
  in?: InputMaybe<CycleTimeLocWorkingCatReqInput>;
}


export type ConstructionQueryFetchDetailProdCatArgs = {
  in?: InputMaybe<DetailProdCatReqInput>;
}


export type ConstructionQueryFetchDetailProdDateArgs = {
  in?: InputMaybe<DetailProdDateReqInput>;
}


export type ConstructionQueryFetchDetailProdLocArgs = {
  in?: InputMaybe<DetailProdLocReqInput>;
}


export type ConstructionQueryFetchDetailProdTimeArgs = {
  in?: InputMaybe<DetailProdReqInput>;
}


export type ConstructionQueryFetchDetailResourseArgs = {
  in?: InputMaybe<DetailResourseReqInput>;
}


export type ConstructionQueryFetchEquipmentUtilizationArgs = {
  in?: InputMaybe<EquipmentUtilizationReqInput>;
}


export type ConstructionQueryFetchFilterEqUtilArgs = {
  in?: InputMaybe<FilterEqUtilReqInput>;
}


export type ConstructionQueryFetchLocWorkingCatArgs = {
  in?: InputMaybe<LocWorkingCatReqInput>;
}


export type ConstructionQueryFetchPerAreaWorkingCatArgs = {
  in?: InputMaybe<PerAreaWorkingCatReqInput>;
}


export type ConstructionQueryFetchProdAnalysisArgs = {
  in?: InputMaybe<ProdAnalysisReqInput>;
}


export type ConstructionQueryFetchProdPerAreaArgs = {
  in?: InputMaybe<ProdPerAreaReqInput>;
}


export type ConstructionQueryFetchProdSCurveAndHistoryArgs = {
  in?: InputMaybe<ProdSCurveAndHistoryReqInput>;
}


export type ConstructionQueryFetchProductionSummaryArgs = {
  in?: InputMaybe<ProdSummaryReqInput>;
}


export type ConstructionQueryFetchResourceArgs = {
  in?: InputMaybe<ResourceReqInput>;
}


export type ConstructionQueryFetchResourceDateArgs = {
  in?: InputMaybe<ResourceDateReqInput>;
}

export type CraneData = {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
}

export type CustOffData = {
  cutOffDate?: Maybe<Array<Scalars['String']>>;
  totalData?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
}

export type CutOffDateReqInput = {
  location?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  projectNo?: InputMaybe<Scalars['String']>;
  workingCategory?: InputMaybe<Scalars['String']>;
}

export type CutOffDateResp = {
  data?: Maybe<CustOffData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type CycleAndStartTimeHistoryData = {
  currWaitingTimeStartingPoints?: Maybe<Scalars['Float']>;
  cycleTimeHistory?: Maybe<Array<CycleTimeHistoryData>>;
  ovrlAvgWaitingTimeStartingPoint?: Maybe<Scalars['Float']>;
  startTimeHistory?: Maybe<Array<StartTimeHistoryData>>;
  theoriticalCapacity?: Maybe<Scalars['Float']>;
}

export type CycleAndStartTimeHistoryReqInput = {
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type CycleAndStartTimeHistoryResp = {
  data?: Maybe<CycleAndStartTimeHistoryData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type CycleTimeData = {
  activityDate?: Maybe<Scalars['String']>;
  avgAlignmentPlatform?: Maybe<Scalars['Float']>;
  avgAssembly?: Maybe<Scalars['Float']>;
  avgBlastingAndPainting?: Maybe<Scalars['Float']>;
  avgBoltTightening?: Maybe<Scalars['Float']>;
  avgChippingAndPadding?: Maybe<Scalars['Float']>;
  avgCutting?: Maybe<Scalars['Float']>;
  avgCycleTimeAvg?: Maybe<Scalars['Float']>;
  avgCycleTimeCurrent?: Maybe<Scalars['Float']>;
  avgDelivery?: Maybe<Scalars['Float']>;
  avgFormworkAndGrouting?: Maybe<Scalars['Float']>;
  avgGroundAssembly?: Maybe<Scalars['Float']>;
  avgInstallBeam?: Maybe<Scalars['Float']>;
  avgInstallFrame?: Maybe<Scalars['Float']>;
  avgInstallSupport?: Maybe<Scalars['Float']>;
  avgPacking?: Maybe<Scalars['Float']>;
  avgStartTime?: Maybe<Scalars['String']>;
  avgTotal?: Maybe<Scalars['Float']>;
  avgWelding?: Maybe<Scalars['Float']>;
  currAlignmentPlatform?: Maybe<Scalars['Float']>;
  currAssembly?: Maybe<Scalars['Float']>;
  currBlastingAndPainting?: Maybe<Scalars['Float']>;
  currBoltTightening?: Maybe<Scalars['Float']>;
  currChippingAndPadding?: Maybe<Scalars['Float']>;
  currCutting?: Maybe<Scalars['Float']>;
  currDelivery?: Maybe<Scalars['Float']>;
  currFormworkAndGrouting?: Maybe<Scalars['Float']>;
  currGroundAssembly?: Maybe<Scalars['Float']>;
  currInstallBeam?: Maybe<Scalars['Float']>;
  currInstallFrame?: Maybe<Scalars['Float']>;
  currInstallSupport?: Maybe<Scalars['Float']>;
  currPacking?: Maybe<Scalars['Float']>;
  currWelding?: Maybe<Scalars['Float']>;
  currentProduction?: Maybe<Scalars['Int']>;
  currentStartTime?: Maybe<Scalars['String']>;
  currentTotal?: Maybe<Scalars['Float']>;
}

export type CycleTimeDateReqInput = {
  location?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  projectNo?: InputMaybe<Scalars['String']>;
  workingCategory?: InputMaybe<Scalars['String']>;
}

export type CycleTimeDateResp = {
  data?: Maybe<ActivityDate>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type CycleTimeHistoryData = {
  activityDate?: Maybe<Scalars['String']>;
  avgCycleTime?: Maybe<Scalars['String']>;
}

export type CycleTimeLocCat = {
  location?: Maybe<Scalars['String']>;
  workingCategoryList?: Maybe<Array<Scalars['String']>>;
}

export type CycleTimeLocWorkingCatData = {
  locWorkingCatList?: Maybe<Array<CycleTimeLocCat>>;
}

export type CycleTimeLocWorkingCatReqInput = {
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type CycleTimeLocWorkingCatResp = {
  data?: Maybe<CycleTimeLocWorkingCatData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type CycleTimeReqInput = {
  activityDate?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
  workingCategory?: InputMaybe<Scalars['String']>;
}

export type CycleTimeResp = {
  data?: Maybe<CycleTimeData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type DetailProdCatData = {
  workingCategory?: Maybe<Array<Scalars['String']>>;
}

export type DetailProdCatReqInput = {
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type DetailProdCatResp = {
  data?: Maybe<DetailProdCatData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type DetailProdData = {
  activityDate?: Maybe<Scalars['String']>;
  alignmentPlatform?: Maybe<Scalars['Float']>;
  assembly?: Maybe<Scalars['Float']>;
  blastingAndPainting?: Maybe<Scalars['Float']>;
  boltTightening?: Maybe<Scalars['Float']>;
  chippingAndPadding?: Maybe<Scalars['Float']>;
  cutting?: Maybe<Scalars['Float']>;
  delivery?: Maybe<Scalars['Float']>;
  formworkAndGrouting?: Maybe<Scalars['Float']>;
  groundAssembly?: Maybe<Scalars['Float']>;
  installFrame?: Maybe<Scalars['Float']>;
  intallBeam?: Maybe<Scalars['Float']>;
  packing?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  waitingTime?: Maybe<Scalars['Float']>;
  welding?: Maybe<Scalars['Float']>;
}

export type DetailProdDataList = {
  avgWaitingTime?: Maybe<Scalars['Float']>;
  detailProductionTime?: Maybe<Array<DetailProdData>>;
  totalDetailProductionTime?: Maybe<DetailProdData>;
}

export type DetailProdDateData = {
  activityDate?: Maybe<Array<Scalars['String']>>;
  totalData?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
}

export type DetailProdDateReqInput = {
  location?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  projectNo?: InputMaybe<Scalars['String']>;
  workingCategory?: InputMaybe<Scalars['String']>;
}

export type DetailProdDateResp = {
  data?: Maybe<DetailProdDateData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type DetailProdLocData = {
  location?: Maybe<Array<Scalars['String']>>;
}

export type DetailProdLocReqInput = {
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type DetailProdLocResp = {
  data?: Maybe<DetailProdLocData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type DetailProdReqInput = {
  activityDate?: InputMaybe<Array<Scalars['String']>>;
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
  workingCategory?: InputMaybe<Scalars['String']>;
}

export type DetailProdResp = {
  data?: Maybe<DetailProdDataList>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type DetailResourse = {
  detailResourse?: Maybe<Array<DetailResourseData>>;
}

export type DetailResourseData = {
  activityDate?: Maybe<Scalars['String']>;
  cummHours?: Maybe<Scalars['String']>;
  cummRentDays?: Maybe<Scalars['String']>;
  equipID?: Maybe<Scalars['String']>;
  usageHours?: Maybe<Scalars['String']>;
  utilization?: Maybe<Scalars['String']>;
}

export type DetailResourseReqInput = {
  activityDate?: InputMaybe<Array<Scalars['String']>>;
  equipment?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type DetailResourseResp = {
  data?: Maybe<DetailResourse>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type EquipmentUtilizationData = {
  avgEquipUtilization?: Maybe<Scalars['String']>;
  resourceUtilizationHistory?: Maybe<Array<ResourceUtilizationHistoryData>>;
}

export type EquipmentUtilizationReqInput = {
  equipment?: InputMaybe<Array<Scalars['String']>>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type EquipmentUtilizationResp = {
  data?: Maybe<EquipmentUtilizationData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type FetchProjectRequestInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
}

export type FetchProjectResponse = {
  data?: Maybe<ProjectItems>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type FetchWeatherRequestInput = {
  projectDefinition?: InputMaybe<Scalars['String']>;
}

export type FetchWeatherResponse = {
  data?: Maybe<WeatherData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type FilterEqUtilReqInput = {
  page?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type FilterEqUtilResp = {
  data?: Maybe<Array<Scalars['String']>>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type FourDaysForecastData = {
  date?: Maybe<Scalars['String']>;
  day?: Maybe<Scalars['String']>;
  daysCondition?: Maybe<Scalars['String']>;
  daysTemp?: Maybe<Scalars['String']>;
  iconWeatherDaily?: Maybe<Scalars['String']>;
}

export type HourlyData = {
  daysConditions?: Maybe<Scalars['String']>;
  daysIcon?: Maybe<Scalars['String']>;
  daysTemp?: Maybe<Scalars['String']>;
  hoursConditions?: Maybe<Scalars['String']>;
  hoursDatetime?: Maybe<Scalars['String']>;
  hoursDew?: Maybe<Scalars['Float']>;
  hoursHumidity?: Maybe<Scalars['Float']>;
  hoursIcon?: Maybe<Scalars['String']>;
  hoursPressure?: Maybe<Scalars['Float']>;
  hoursTemp?: Maybe<Scalars['String']>;
  iconName?: Maybe<Scalars['String']>;
  iconWeatherHourly?: Maybe<Scalars['String']>;
}

export type HourlyForecastData = {
  date?: Maybe<Scalars['String']>;
  day?: Maybe<Scalars['String']>;
  hourly?: Maybe<Array<HourlyData>>;
  project?: Maybe<Scalars['String']>;
  projectCode?: Maybe<Scalars['String']>;
  projectTitle?: Maybe<Scalars['String']>;
}

export type LocWorkingCatData = {
  location?: Maybe<Scalars['String']>;
  workingCategoryList?: Maybe<Array<Scalars['String']>>;
}

export type LocWorkingCatFilterData = {
  locWorkingCatList?: Maybe<Array<LocWorkingCatData>>;
}

export type LocWorkingCatReqInput = {
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type LocWorkingCatResp = {
  data?: Maybe<LocWorkingCatFilterData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type ManliftData = {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
}

export type PerAreaCat = {
  workingCategory?: Maybe<Array<Scalars['String']>>;
}

export type PerAreaWorkingCatReqInput = {
  page?: InputMaybe<Scalars['Int']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type PerAreaWorkingCatResp = {
  data?: Maybe<PerAreaCat>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type PipeResourcesAnalysis = {
  averagePersonnel?: Maybe<Scalars['Int']>;
  totalCrane?: Maybe<Scalars['Int']>;
  totalDumpTruck?: Maybe<Scalars['Int']>;
  totalExcavator?: Maybe<Scalars['Int']>;
  totalManlift?: Maybe<Scalars['Int']>;
  totalOther?: Maybe<Scalars['Int']>;
  totalRig?: Maybe<Scalars['Int']>;
}

export type PipingCycleTimeDateData = {
  dates?: Maybe<Array<Scalars['String']>>;
  totalData?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
}

export type PipingCycleTimeDateReqInput = {
  location?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type PipingCycleTimeDateResp = {
  data?: Maybe<PipingCycleTimeDateData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type PipingDetProdDateData = {
  activityDate?: Maybe<Array<Scalars['String']>>;
  totalData?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
}

export type PipingDetProdDateReqInput = {
  location?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type PipingDetProdDateResp = {
  data?: Maybe<PipingDetProdDateData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type PipingDetailPersonnelData = {
  activityDate?: Maybe<Scalars['String']>;
  idCardNo?: Maybe<Scalars['String']>;
  productivity?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  welderName?: Maybe<Scalars['String']>;
  welderProductivity?: Maybe<Scalars['String']>;
  wqtNo?: Maybe<Scalars['String']>;
}

export type PipingDetailProdTimeData = {
  detailProduction?: Maybe<Array<PipingDetailProdTimeList>>;
  totalDetailProduction?: Maybe<PipingTotalDetailProd>;
}

export type PipingDetailProdTimeList = {
  area?: Maybe<Scalars['String']>;
  dates?: Maybe<Scalars['String']>;
  estimateBq?: Maybe<Scalars['String']>;
  pcwbs?: Maybe<Scalars['String']>;
  progFitupAll?: Maybe<Scalars['String']>;
  progWeldAll?: Maybe<Scalars['String']>;
  remainingWeldPct?: Maybe<Scalars['String']>;
  totalDbByReceiving?: Maybe<Scalars['String']>;
}

export type PipingDetailProdTimeReqInput = {
  activityDate?: InputMaybe<Array<Scalars['String']>>;
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type PipingDetailProdTimeResp = {
  data?: Maybe<PipingDetailProdTimeData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type PipingDetailResAnalysisData = {
  detailPersonnel?: Maybe<Array<PipingDetailPersonnelData>>;
}

export type PipingDetailResAnalysisReqInput = {
  activityDate?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
  welderName?: InputMaybe<Scalars['String']>;
}

export type PipingDetailResAnalysisResp = {
  data?: Maybe<PipingDetailResAnalysisData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type PipingPersonnelData = {
  status?: Maybe<Scalars['String']>;
  welderName?: Maybe<Scalars['String']>;
}

export type PipingProdAnalysisData = {
  overallBq?: Maybe<Scalars['String']>;
  productionPerArea?: Maybe<Array<PipingProdPerArea>>;
  resourcesAnalysis?: Maybe<PipeResourcesAnalysis>;
  stdDeviationProd?: Maybe<Scalars['String']>;
  totalQtyPiping?: Maybe<Scalars['String']>;
  totalQtyPoints?: Maybe<Scalars['String']>;
  varianceProduction?: Maybe<Scalars['String']>;
  workfrontBq?: Maybe<Scalars['String']>;
}

export type PipingProdAnalysisReqInput = {
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type PipingProdAnalysisResp = {
  data?: Maybe<PipingProdAnalysisData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type PipingProdPerArea = {
  area?: Maybe<Scalars['String']>;
  progress?: Maybe<Scalars['String']>;
}

export type PipingProdPerAreaData = {
  imageArea?: Maybe<Scalars['String']>;
  prodPerArea?: Maybe<Array<PipingProdPerAreaList>>;
}

export type PipingProdPerAreaList = {
  area?: Maybe<Scalars['String']>;
  areaCode?: Maybe<Scalars['String']>;
  boq?: Maybe<Scalars['String']>;
  dailyProd?: Maybe<Scalars['String']>;
}

export type PipingProdPerAreaReqInput = {
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type PipingProdPerAreaResp = {
  data?: Maybe<PipingProdPerAreaData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type PipingQuery = {
  FetchCycleTimeDate?: Maybe<PipingCycleTimeDateResp>;
  FetchDetailProduction?: Maybe<PipingDetailProdTimeResp>;
  FetchDetailProductionDate?: Maybe<PipingDetProdDateResp>;
  FetchDetailResAnalysis?: Maybe<PipingDetailResAnalysisResp>;
  FetchProdSCurveAndProdHistory?: Maybe<ProdSCurveAndProdHistoryResp>;
  FetchProductionAnalysis?: Maybe<PipingProdAnalysisResp>;
  FetchProductionPerArea?: Maybe<PipingProdPerAreaResp>;
  FetchProductionPerAreaLoc?: Maybe<ProductionPerAreaLocResp>;
  FetchProgressSummary?: Maybe<ProgressSummaryResp>;
  FetchProgressSummaryDate?: Maybe<ProgressSummaryDateResp>;
  FetchProgressSummaryLoc?: Maybe<ProgressSummaryLocResp>;
  FetchResAnalysisWelder?: Maybe<PipingResAnalysisWelderResp>;
  FetchResAnalysisWelderProdHistory?: Maybe<PipingResAnalysisWelderProdHistoryResp>;
  FetchResourceAnalysis?: Maybe<PipingResAnalysisResp>;
  FetchResourceAnalysisDate?: Maybe<PipingResAnalysisDateResp>;
}


export type PipingQueryFetchCycleTimeDateArgs = {
  in?: InputMaybe<PipingCycleTimeDateReqInput>;
}


export type PipingQueryFetchDetailProductionArgs = {
  in?: InputMaybe<PipingDetailProdTimeReqInput>;
}


export type PipingQueryFetchDetailProductionDateArgs = {
  in?: InputMaybe<PipingDetProdDateReqInput>;
}


export type PipingQueryFetchDetailResAnalysisArgs = {
  in?: InputMaybe<PipingDetailResAnalysisReqInput>;
}


export type PipingQueryFetchProdSCurveAndProdHistoryArgs = {
  in?: InputMaybe<ProdSCurveAndProdHistoryReqInput>;
}


export type PipingQueryFetchProductionAnalysisArgs = {
  in?: InputMaybe<PipingProdAnalysisReqInput>;
}


export type PipingQueryFetchProductionPerAreaArgs = {
  in?: InputMaybe<PipingProdPerAreaReqInput>;
}


export type PipingQueryFetchProductionPerAreaLocArgs = {
  in?: InputMaybe<ProductionPerAreaLocReqInput>;
}


export type PipingQueryFetchProgressSummaryArgs = {
  in?: InputMaybe<ProgressSummaryReqInput>;
}


export type PipingQueryFetchProgressSummaryDateArgs = {
  in?: InputMaybe<ProgressSummaryDateReqInput>;
}


export type PipingQueryFetchProgressSummaryLocArgs = {
  in?: InputMaybe<ProgressSummaryLocReqInput>;
}


export type PipingQueryFetchResAnalysisWelderArgs = {
  in?: InputMaybe<PipingResAnalysisWelderReqInput>;
}


export type PipingQueryFetchResAnalysisWelderProdHistoryArgs = {
  in?: InputMaybe<PipingResAnalysisWelderProdHistoryReqInput>;
}


export type PipingQueryFetchResourceAnalysisArgs = {
  in?: InputMaybe<PipingResAnalysisReqInput>;
}


export type PipingQueryFetchResourceAnalysisDateArgs = {
  in?: InputMaybe<PipingResAnalysisDateReqInput>;
}

export type PipingResAnalysisData = {
  personnel?: Maybe<Array<PipingPersonnelData>>;
  totalPersonnel?: Maybe<Scalars['Int']>;
}

export type PipingResAnalysisDateData = {
  activityDate?: Maybe<Array<Scalars['String']>>;
  totalData?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
}

export type PipingResAnalysisDateReqInput = {
  location?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type PipingResAnalysisDateResp = {
  data?: Maybe<PipingResAnalysisDateData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type PipingResAnalysisReqInput = {
  activityDate?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type PipingResAnalysisResp = {
  data?: Maybe<PipingResAnalysisData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type PipingResAnalysisWelderData = {
  welder?: Maybe<Array<Scalars['String']>>;
}

export type PipingResAnalysisWelderProdHistoryData = {
  avgWelderProductivity?: Maybe<Scalars['String']>;
  welderProductionHistory?: Maybe<Array<WelderProdHistory>>;
}

export type PipingResAnalysisWelderProdHistoryReqInput = {
  projectNo?: InputMaybe<Scalars['String']>;
  welder?: InputMaybe<Array<Scalars['String']>>;
}

export type PipingResAnalysisWelderProdHistoryResp = {
  data?: Maybe<PipingResAnalysisWelderProdHistoryData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type PipingResAnalysisWelderReqInput = {
  projectNo?: InputMaybe<Scalars['String']>;
}

export type PipingResAnalysisWelderResp = {
  data?: Maybe<PipingResAnalysisWelderData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type PipingTotalDetailProd = {
  area?: Maybe<Scalars['String']>;
  dates?: Maybe<Scalars['String']>;
  estimateBq?: Maybe<Scalars['String']>;
  pcwbs?: Maybe<Scalars['String']>;
  progFitupAll?: Maybe<Scalars['String']>;
  progWeldAll?: Maybe<Scalars['String']>;
  remainingWeldPct?: Maybe<Scalars['String']>;
  totalDbByReceiving?: Maybe<Scalars['String']>;
}

export type ProdAnalysisData = {
  productionPerArea?: Maybe<Array<ProductionPerArea>>;
  remainingQtyBq?: Maybe<Scalars['Float']>;
  resourcesAnalysis?: Maybe<ResourcesAnalysis>;
  stdDeviationProd?: Maybe<Scalars['Float']>;
  totalQtyPoints?: Maybe<Scalars['Float']>;
  totalQtyStructure?: Maybe<Scalars['Float']>;
  varianceProduction?: Maybe<Scalars['Float']>;
}

export type ProdAnalysisReqInput = {
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
  workingCategory?: InputMaybe<Scalars['String']>;
}

export type ProdAnalysisResp = {
  data?: Maybe<ProdAnalysisData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type ProdHistory = {
  activityDate?: Maybe<Scalars['String']>;
  avgRunningProductivity?: Maybe<Scalars['Float']>;
  overallProgress?: Maybe<Scalars['Float']>;
}

export type ProdHistoryPipingData = {
  activityDate?: Maybe<Scalars['String']>;
  avgProductivityWeldAll?: Maybe<Scalars['Float']>;
  dailyProgWeldAll?: Maybe<Scalars['Float']>;
}

export type ProdPerArea = {
  area?: Maybe<Scalars['String']>;
  bq?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['String']>;
  qty?: Maybe<Scalars['Float']>;
  uom?: Maybe<Scalars['String']>;
}

export type ProdPerAreaData = {
  imageArea?: Maybe<Scalars['String']>;
  prodPerArea?: Maybe<Array<ProdPerArea>>;
}

export type ProdPerAreaReqInput = {
  projectNo?: InputMaybe<Scalars['String']>;
  workingCategory?: InputMaybe<Scalars['String']>;
}

export type ProdPerAreaResp = {
  data?: Maybe<ProdPerAreaData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type ProdSCurveAndHistoryData = {
  productionHistory?: Maybe<Array<ProdHistory>>;
  productionSCurve?: Maybe<Array<ProdSCurveData>>;
}

export type ProdSCurveAndHistoryReqInput = {
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
  workingCategory?: InputMaybe<Scalars['String']>;
}

export type ProdSCurveAndHistoryResp = {
  data?: Maybe<ProdSCurveAndHistoryData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type ProdSCurveAndProdHistoryData = {
  productionHistory?: Maybe<Array<ProdHistoryPipingData>>;
  productionSCurve?: Maybe<Array<ProdSCurvePipingData>>;
}

export type ProdSCurveAndProdHistoryReqInput = {
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type ProdSCurveAndProdHistoryResp = {
  data?: Maybe<ProdSCurveAndProdHistoryData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type ProdSCurveData = {
  activityDate?: Maybe<Scalars['String']>;
  cummProgress?: Maybe<Scalars['Float']>;
  maxBq?: Maybe<Scalars['Float']>;
  overallProgress?: Maybe<Scalars['Float']>;
}

export type ProdSCurvePipingData = {
  activityDate?: Maybe<Scalars['String']>;
  dailyFitupAll?: Maybe<Scalars['Float']>;
  dailyProgWeldAll?: Maybe<Scalars['Float']>;
  totalFitusCsSs?: Maybe<Scalars['Float']>;
  totalWeldCsSs?: Maybe<Scalars['Float']>;
}

export type ProdSummaryData = {
  actual?: Maybe<Scalars['Float']>;
  avgCummProductivity?: Maybe<Scalars['Float']>;
  avgRunningProductivity?: Maybe<Scalars['Float']>;
  cutOffDate?: Maybe<Scalars['String']>;
  daysToGo?: Maybe<Scalars['Int']>;
  gapPercentage?: Maybe<Scalars['Float']>;
  lastProduction?: Maybe<Scalars['String']>;
  maxProductivityToDate?: Maybe<Scalars['Float']>;
  minProductivityToDate?: Maybe<Scalars['Float']>;
  planFinish?: Maybe<Scalars['String']>;
  remainingBq?: Maybe<Scalars['Float']>;
  tonsPercentage?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  workingCategory?: Maybe<Scalars['String']>;
}

export type ProdSummaryReqInput = {
  cutOffDate?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
  workingCategory?: InputMaybe<Scalars['String']>;
}

export type ProdSummaryResp = {
  data?: Maybe<ProdSummaryData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type ProductionPerArea = {
  area?: Maybe<Scalars['String']>;
  progress?: Maybe<Scalars['Float']>;
}

export type ProductionPerAreaLocData = {
  location?: Maybe<Array<Scalars['String']>>;
}

export type ProductionPerAreaLocReqInput = {
  projectNo?: InputMaybe<Scalars['String']>;
}

export type ProductionPerAreaLocResp = {
  data?: Maybe<ProductionPerAreaLocData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type ProgressSummaryData = {
  activityDate?: Maybe<Scalars['String']>;
  actual?: Maybe<Scalars['Float']>;
  avgDailyProgWeldAll?: Maybe<Scalars['Float']>;
  dailyProgWeldAll?: Maybe<Scalars['Float']>;
  daysToGo?: Maybe<Scalars['Int']>;
  gapActualToDailyProgWeldAllPercentage?: Maybe<Scalars['Float']>;
  gapActualTotalPercentage?: Maybe<Scalars['Float']>;
  planFinishDate?: Maybe<Scalars['String']>;
  productivityWeldAll?: Maybe<Scalars['Float']>;
  remainingBq?: Maybe<Scalars['Float']>;
  tonsPercentage?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  totalBq?: Maybe<Scalars['Float']>;
}

export type ProgressSummaryDateData = {
  activityDate?: Maybe<Array<Scalars['String']>>;
  totalData?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
}

export type ProgressSummaryDateReqInput = {
  location?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type ProgressSummaryDateResp = {
  data?: Maybe<ProgressSummaryDateData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type ProgressSummaryLocData = {
  location?: Maybe<Array<Scalars['String']>>;
}

export type ProgressSummaryLocReqInput = {
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type ProgressSummaryLocResp = {
  data?: Maybe<ProgressSummaryLocData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type ProgressSummaryReqInput = {
  activityDate?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type ProgressSummaryResp = {
  data?: Maybe<ProgressSummaryData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type ProjectData = {
  client?: Maybe<Scalars['String']>;
  clientLogo?: Maybe<Scalars['String']>;
  contract?: Maybe<Scalars['String']>;
  contractCompletionDate?: Maybe<Scalars['String']>;
  contractDuration?: Maybe<Scalars['String']>;
  contractEffDate?: Maybe<Scalars['String']>;
  contractValue?: Maybe<Scalars['String']>;
  daysLeft?: Maybe<Scalars['String']>;
  facility?: Maybe<Scalars['String']>;
  iDPsgrql?: Maybe<Scalars['Int']>;
  partnership?: Maybe<Scalars['String']>;
  plantArea?: Maybe<Scalars['String']>;
  plantLocation?: Maybe<Scalars['String']>;
  plantType?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  projectDefinition?: Maybe<Scalars['String']>;
  projectDirector?: Maybe<Scalars['String']>;
  projectDuration?: Maybe<Scalars['String']>;
  projectGroup?: Maybe<Scalars['String']>;
  projectManager?: Maybe<Scalars['String']>;
  projectName?: Maybe<Scalars['String']>;
  projectNo?: Maybe<Scalars['String']>;
  projectPlanCompletionDate?: Maybe<Scalars['String']>;
  projectPlanStartDate?: Maybe<Scalars['String']>;
  projectType?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
}

export type ProjectItems = {
  items?: Maybe<Array<ProjectData>>;
}

export type Query = {
  Config: ConfigQuery;
  Construction: ConstructionQuery;
  Piping: PipingQuery;
  Rotating: RotatingQuery;
  service: Service;
}

export type RainPerMonth = {
  daysDatetime?: Maybe<Scalars['String']>;
  rainHours?: Maybe<Scalars['Int']>;
}

export type ResourceData = {
  averagePersonnel?: Maybe<Scalars['Int']>;
  crane?: Maybe<Array<CraneData>>;
  manlift?: Maybe<Array<ManliftData>>;
  totalCraneUnit?: Maybe<Scalars['Int']>;
  totalManliftUnit?: Maybe<Scalars['Int']>;
}

export type ResourceDateReqInput = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type ResourceDateResp = {
  data?: Maybe<ActivityDate>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type ResourceReqInput = {
  activityDate?: InputMaybe<Array<Scalars['String']>>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type ResourceResp = {
  data?: Maybe<ResourceData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type ResourceUtilizationHistoryData = {
  activityDate?: Maybe<Scalars['String']>;
  avgEquipmentUtil?: Maybe<Scalars['Float']>;
}

export type ResourcesAnalysis = {
  averagePersonnel?: Maybe<Scalars['Int']>;
  totalCrane?: Maybe<Scalars['Int']>;
  totalDumpTruck?: Maybe<Scalars['Int']>;
  totalExcavator?: Maybe<Scalars['Int']>;
  totalManlift?: Maybe<Scalars['Int']>;
  totalOther?: Maybe<Scalars['Int']>;
  totalRig?: Maybe<Scalars['Int']>;
}

export type RotatingProdAnalysisData = {
  overallBq?: Maybe<Scalars['String']>;
  productionPerArea?: Maybe<Array<RotatingProdPerArea>>;
  stdDeviationProd?: Maybe<Scalars['String']>;
  totalQtyEquipment?: Maybe<Scalars['String']>;
  totalQtyPoints?: Maybe<Scalars['String']>;
  varianceProduction?: Maybe<Scalars['String']>;
  workfrontBq?: Maybe<Scalars['String']>;
}

export type RotatingProdAnalysisReqInput = {
  projectNo?: InputMaybe<Scalars['String']>;
}

export type RotatingProdAnalysisResp = {
  data?: Maybe<RotatingProdAnalysisData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type RotatingProdHistoryPipingData = {
  activityDate?: Maybe<Scalars['String']>;
  productivityActual?: Maybe<Scalars['Float']>;
  qtyActual?: Maybe<Scalars['Float']>;
}

export type RotatingProdPerArea = {
  area?: Maybe<Scalars['String']>;
  progress?: Maybe<Scalars['String']>;
}

export type RotatingProdPerAreaData = {
  imageArea?: Maybe<Scalars['String']>;
  prodPerArea?: Maybe<Array<RotatingProdPerAreaList>>;
}

export type RotatingProdPerAreaList = {
  areaCode?: Maybe<Scalars['String']>;
  qtyActualErection?: Maybe<Scalars['String']>;
  qtyActualReceived?: Maybe<Scalars['String']>;
  totalEquipPerArea?: Maybe<Scalars['String']>;
}

export type RotatingProdPerAreaReqInput = {
  projectNo?: InputMaybe<Scalars['String']>;
}

export type RotatingProdPerAreaResp = {
  data?: Maybe<RotatingProdPerAreaData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type RotatingProdSCurveAndProdHistoryData = {
  productionHistory?: Maybe<Array<RotatingProdHistoryPipingData>>;
  productionSCurve?: Maybe<Array<RotatingProdSCurvePipingData>>;
}

export type RotatingProdSCurveAndProdHistoryReqInput = {
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type RotatingProdSCurveAndProdHistoryResp = {
  data?: Maybe<RotatingProdSCurveAndProdHistoryData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type RotatingProdSCurvePipingData = {
  activityDate?: Maybe<Scalars['String']>;
  avgCummActual?: Maybe<Scalars['Float']>;
  qtyActual?: Maybe<Scalars['Float']>;
}

export type RotatingProgSumData = {
  activityDate?: Maybe<Scalars['String']>;
  actual?: Maybe<Scalars['Float']>;
  daysToGo?: Maybe<Scalars['Int']>;
  gapActualTotalPercentage?: Maybe<Scalars['Float']>;
  lastProduction?: Maybe<Scalars['String']>;
  maxProd?: Maybe<Scalars['Float']>;
  planFinishDate?: Maybe<Scalars['String']>;
  remainingBq?: Maybe<Scalars['Float']>;
  todayProd?: Maybe<Scalars['Float']>;
  tonsPercentage?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
}

export type RotatingProgSumDateData = {
  activityDate?: Maybe<Array<Scalars['String']>>;
  totalData?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
}

export type RotatingProgSumDateReqInput = {
  location?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type RotatingProgSumDateResp = {
  data?: Maybe<RotatingProgSumDateData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type RotatingProgSumLocData = {
  location?: Maybe<Array<Scalars['String']>>;
}

export type RotatingProgSumLocReqInput = {
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type RotatingProgSumLocResp = {
  data?: Maybe<RotatingProgSumLocData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type RotatingProgSumReqInput = {
  activityDate?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  projectNo?: InputMaybe<Scalars['String']>;
}

export type RotatingProgSumResp = {
  data?: Maybe<RotatingProgSumData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type RotatingQuery = {
  FetchProdSCurveAndProdHistory?: Maybe<RotatingProdSCurveAndProdHistoryResp>;
  FetchProductionAnalysis?: Maybe<RotatingProdAnalysisResp>;
  FetchProductionPerArea?: Maybe<RotatingProdPerAreaResp>;
  FetchProgressSummary?: Maybe<RotatingProgSumResp>;
  FetchProgressSummaryDate?: Maybe<RotatingProgSumDateResp>;
  FetchProgressSummaryLoc?: Maybe<RotatingProgSumLocResp>;
}


export type RotatingQueryFetchProdSCurveAndProdHistoryArgs = {
  in?: InputMaybe<RotatingProdSCurveAndProdHistoryReqInput>;
}


export type RotatingQueryFetchProductionAnalysisArgs = {
  in?: InputMaybe<RotatingProdAnalysisReqInput>;
}


export type RotatingQueryFetchProductionPerAreaArgs = {
  in?: InputMaybe<RotatingProdPerAreaReqInput>;
}


export type RotatingQueryFetchProgressSummaryArgs = {
  in?: InputMaybe<RotatingProgSumReqInput>;
}


export type RotatingQueryFetchProgressSummaryDateArgs = {
  in?: InputMaybe<RotatingProgSumDateReqInput>;
}


export type RotatingQueryFetchProgressSummaryLocArgs = {
  in?: InputMaybe<RotatingProgSumLocReqInput>;
}

export type StartTimeHistoryData = {
  activityDate?: Maybe<Scalars['String']>;
  maxStartTime?: Maybe<Scalars['Float']>;
}

export type WeatherData = {
  rainySeasonHistory?: Maybe<Array<RainPerMonth>>;
  totalRainyDays?: Maybe<Scalars['String']>;
  totalRainyHours?: Maybe<Scalars['String']>;
}

export type WeatherDateTimeList = {
  totalData?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
  weatherDateTimeData?: Maybe<Array<Scalars['String']>>;
}

export type WeatherDateTimeReqInput = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  projectDefinition?: InputMaybe<Scalars['String']>;
}

export type WeatherDateTimeResp = {
  data?: Maybe<WeatherDateTimeList>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type WeatherForecastData = {
  fourDaysAheadForecast?: Maybe<Array<FourDaysForecastData>>;
  hourlyForecast?: Maybe<HourlyForecastData>;
}

export type WeatherForecastRequestInput = {
  dayDate?: InputMaybe<Scalars['String']>;
  projectDefinition?: InputMaybe<Scalars['String']>;
}

export type WeatherForecastResponse = {
  data?: Maybe<WeatherForecastData>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
}

export type WelderProdHistory = {
  activityDate?: Maybe<Scalars['String']>;
  productivity?: Maybe<Scalars['Float']>;
}

export type Service = {
  sdl?: Maybe<Scalars['String']>;
}
