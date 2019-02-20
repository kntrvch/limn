import { IPoint, IDrawingShape, Point, DrawingLine, DrawingRectangle } from './Shapes';
import { DrawingToolType } from './Enums';

export interface IDrawingModel {
    selection: IDrawingShape;
    shapes: IDrawingShape[];
    addShape(shape: IDrawingShape);
    getNewShape(location: IPoint): IDrawingShape;
    getDrawingTool(): DrawingToolType;
}

export class DrawingModel implements IDrawingModel {
    public selection: IDrawingShape = null;
    public shapes: IDrawingShape[] = [];
    private _drawingTool: DrawingToolType = DrawingToolType.Select;
    private _drawingColor: string = "#000000";
    private _addEventListeners() {
        var selectButton = window.document.getElementById("selectButton");
        selectButton.addEventListener("click", (e) => {
            this._drawingTool = DrawingToolType.Select;
        }, true);
        var rectButton = window.document.getElementById("rectangleButton");
        rectButton.addEventListener("click", (e) => {
            this._drawingTool = DrawingToolType.Rectangle;
        }, true);
        var rectButton = window.document.getElementById("lineButton");
        rectButton.addEventListener("click", (e) => {
            this._drawingTool = DrawingToolType.Line;
        }, true);
        var colorPicker = window.document.getElementById("colorPicker");
        colorPicker.addEventListener("change", (e) => {
            this._drawingColor = (<any>e.currentTarget).value;
        }, true);
    }
    constructor() {
        this._addEventListeners();
    }
    public addShape(shape: IDrawingShape) {
        this.shapes.push(shape);
    }


    public getNewShape(location: IPoint): IDrawingShape {
        var shape: IDrawingShape = null;
        var cursor: string = "auto";
        switch (this._drawingTool) {
            case DrawingToolType.Rectangle:
                shape = new DrawingRectangle();
                shape.move(location);
                (<DrawingRectangle>shape).shape.height = 3;
                (<DrawingRectangle>shape).shape.width = 3;
                (<DrawingRectangle>shape).fillStyle = this._drawingColor;
                cursor = "se-resize";
                break;
            case DrawingToolType.Line:
                shape = new DrawingLine();
                (<DrawingLine>shape).shape.p1 = location;
                (<DrawingLine>shape).shape.p2 = new Point(location.x + 1, location.y + 1);
                (<DrawingLine>shape).strokeStyle = this._drawingColor;
                cursor = "e-resize";
                break;
        }
        window.document.body.style.cursor = cursor;
        return shape;
    }
    public getDrawingTool(): DrawingToolType {
        return this._drawingTool;
    }
}