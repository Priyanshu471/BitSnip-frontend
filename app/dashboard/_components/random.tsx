import { useAnalytics } from "@/hooks/useAnalytics";
import { useAnalyticsData } from "@/hooks/useAnalyticsData";
import { useState } from "react";

const Random = () => {
  const { totalClick } = useAnalyticsData();
  //   setTotalClicks(analytics.totalClicks);
  return <div>{totalClick}</div>;
};

export default Random;
