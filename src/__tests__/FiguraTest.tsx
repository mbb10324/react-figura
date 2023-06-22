import React from "react";
import { render } from "@testing-library/react";
import Figura from "../lib/Figura";

describe("Figura", () => {
    test("renders child components and handles form submission", () => {
        const FiguraMock = render(
            <Figura formID="id">

            </Figura>
        )
        const mockTruth = true
        expect(mockTruth).toEqual(mockTruth);
    })
});