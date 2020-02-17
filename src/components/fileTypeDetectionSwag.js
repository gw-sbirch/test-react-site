import React from "react";
import SwaggerUI from "swagger-ui-react"
import yam from "../api.yaml"; 
import "../Swagger.css";

var FileTypeDetectionSwag = () => <SwaggerUI url={window.location.origin + yam} />

export default FileTypeDetectionSwag;