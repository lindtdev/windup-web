import {DiscriminatorMapping} from '../../../src/app/services/graph/discriminator-mapping';
import {BaseModel} from '../../../src/app/services/graph/base.model';

import {TestGeneratorModel, TestPlanetModel, TestShipModel} from '../models/test.models';
import {WindupConfigurationModel} from '../../../src/app/generated/tsModels/WindupConfigurationModel';
import {FileModel} from '../../../src/app/generated/tsModels/FileModel';
import {JavaClassFileModel} from '../../../src/app/generated/tsModels/JavaClassFileModel';
import {SourceReportModel} from '../../../src/app/generated/tsModels/SourceReportModel';
import {MavenProjectModel} from "../../../src/app/generated/tsModels/MavenProjectModel";
import {SourceReportToProjectEdgeModel} from "../../../src/app/generated/tsModels/SourceReportToProjectEdgeModel";


export class DiscriminatorMappingTestData extends DiscriminatorMapping
{
    static mapping: { [key: string]: typeof BaseModel } = {
        "BaseWindupConfiguration" : WindupConfigurationModel,
        "TestGenerator": TestGeneratorModel,
        "TestShip": TestShipModel,
        "TestPlanet": TestPlanetModel,
        "FileResource": FileModel,
        "JavaClassFileModel": JavaClassFileModel,
        "SourceReportModel": SourceReportModel,
        "MavenFacet": MavenProjectModel,
        "SourceReportEdgeToProjectModel": SourceReportToProjectEdgeModel,
    };

    constructor() { super(); };
}
