import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Services from "../../components/services/services";

function AboutDetails() {
  const router = useRouter();
  const service = router.query.serviceId;
  return <Services service={service} />;
}

export default AboutDetails;
