import { CanvasEngineAction } from './Enums';

export interface IPoint {
    x: number;
    y: number;
}

export interface IShape {
}

export interface IRectangle extends IShape {
    height: number;
    width: number;
    resize(height: number, width: number);
}

export interface ICircle extends IShape {
    radius: number;
    resize(radius: number);
    area(): number;
}

export interface ILine extends IShape {
    p1: IPoint;
    p2: IPoint;
    length(): number;
}

export interface IFreehand extends IShape {
    points: Array<IPoint>;
    addPoint(point: IPoint);
}

export class Point implements IPoint {
    constructor(public x: number, public y: number) {
    }
}

export class Rectangle implements IRectangle {
    constructor(public height: number, public width: number) {
    }
    public resize(height: number, width: number) {
        this.height = height;
        this.width = width;
    }
}

export class Circle implements ICircle {
    constructor(public radius: number) {
    }
    public resize(radius: number) {
        this.radius = radius;
    }
    public area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

export class Line implements ILine {
    constructor(public p1: IPoint, public p2: IPoint) {
    }
    public length(): number {
        var a2 = Math.pow(this.p2.x - this.p1.x, 2);
        var b2 = Math.pow(this.p2.y - this.p1.y, 2);
        return Math.sqrt(a2 + b2);
    }
}

export class Freehand implements IFreehand {
    public points: Array<IPoint> = [];
    constructor() {
    }
    public addPoint(point: IPoint) {
        this.points.push(point);
    }
}

export interface IDraw {
    draw(ctx: CanvasRenderingContext2D);
}

export interface IResize {
    inResizeZone: (mouse: IPoint) => boolean;
    resizeToLocation: (to: IPoint) => void;
}

export interface IMove {
    move: (to: IPoint) => void;
    contains: (mousePoint: IPoint, ctx: CanvasRenderingContext2D) => boolean;
    getMoveOffset(mousePos: IPoint): IPoint;
}

export interface IDrawingShape extends IDraw, IResize, IMove {
    shape: IShape;
    location: IPoint;
    isSelected: boolean;
    selectionZoneWidth: number;
    opacity: number;    
    getCursorType: (mousePoint: IPoint) => string;
    getClickLocationAction(mouse: IPoint, ctx: CanvasRenderingContext2D): CanvasEngineAction;
}

export interface IFillStyle {
    fillStyle: string;
}

export interface IStrokeStyle {
    strokeStyle: string;
}

export class DrawingShapeBase implements IDrawingShape {
    public shape: IShape = null;
    public location: IPoint = new Point(0, 0);
    public isSelected: boolean = false;
    public selectionZoneWidth: number = 4;
    public opacity: number = 1;
    constructor() {
    }
    public inResizeZone(mouse: IPoint): boolean {
        throw ("Method not implemented");
    }
    public move(to: IPoint) {
        this.location = to;
    }
    public resizeToLocation(to: IPoint) {
        throw ("Method not implemented");
    }
    public contains(mousePoint: IPoint, ctx: CanvasRenderingContext2D): boolean {
        throw ("Method not implemented");
    }
    public draw(ctx: CanvasRenderingContext2D) {
        throw ("Method not implemented");
    }
    public getMoveOffset(mousePos: IPoint): IPoint {
        return new Point(0, 0);
    }
    public getCursorType(mousePoint: IPoint): string {
        throw ("Method not implemented");
    }
    public getClickLocationAction(mousePoint: Point, ctx: CanvasRenderingContext2D): CanvasEngineAction {
        if (this.inResizeZone(mousePoint)) {
            return CanvasEngineAction.Resize;
        }
        else if (this.contains(mousePoint, ctx)) {
            return CanvasEngineAction.Move;
        }
        return CanvasEngineAction.None;
    }
}

export class DrawingRectangle extends DrawingShapeBase implements IFillStyle {
    public shape: IRectangle = new Rectangle(0, 0);
    public fillStyle: string = "#FF0000"
    constructor() {
        super();
    }
    public inResizeZone(point: IPoint): boolean {
        return ((point.x >= this.location.x + this.shape.width - this.selectionZoneWidth &&
            point.x <= this.location.x + this.shape.width + this.selectionZoneWidth) &&
            (point.y >= this.location.y + this.shape.height - this.selectionZoneWidth &&
            point.y <= this.location.y + this.shape.height + this.selectionZoneWidth));
    }
    public resizeToLocation(to: IPoint) {
        var cursor = window.document.body.style.cursor;
        if (cursor == "se-resize") {
            this.shape.width = to.x - this.location.x;
            this.shape.height = to.y - this.location.y;
        }
    }
    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = "#000000";
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = 3;
        ctx.fillRect(this.location.x, this.location.y, this.shape.width, this.shape.height);
        ctx.strokeRect(this.location.x, this.location.y, this.shape.width, this.shape.height);
    }
    public contains(mousePoint: IPoint, context: CanvasRenderingContext2D): boolean {
        if (this.shape.height < 0) {
            this.location.y = this.location.y + this.shape.height;
            this.shape.height = this.shape.height * -1;
        }
        if (this.shape.width < 0) {
            this.location.x = this.location.x + this.shape.width;
            this.shape.width = this.shape.width * -1;
        }
        return (this.location.x <= mousePoint.x) &&
            (this.location.x + this.shape.width >= mousePoint.x) &&
            (this.location.y <= mousePoint.y) &&
            (this.location.y + this.shape.height >= mousePoint.y);
    }
    public getMoveOffset(mousePosition: IPoint): IPoint {
        return new Point(mousePosition.x - this.location.x, mousePosition.y - this.location.y);
    }    
    public getCursorType(mousePoint: IPoint) {
        if (this.inResizeZone(mousePoint))
            return "se-resize";
        else
            return "move";
    }
}

export class DrawingLine extends DrawingShapeBase implements IStrokeStyle {
    public shape: ILine = new Line(new Point(0, 0), new Point(1, 1));
    public lineWidth: number = 5;
    public strokeStyle: string = "#000000";
    private lastMousePoint: IPoint = null;
    constructor() {
        super();
    }
    public draw(ctx) {
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.moveTo(this.shape.p1.x, this.shape.p1.y);
        ctx.lineTo(this.shape.p2.x, this.shape.p2.y);
        ctx.stroke();
        ctx.closePath();
    }

    public contains(mousePoint: Point, ctx) {
        if (this.shape.p1.x > this.shape.p2.x) {
            var tempX = this.shape.p1.x;
            var tempY = this.shape.p1.y;

            this.shape.p1.x = this.shape.p2.x;
            this.shape.p1.y = this.shape.p2.y;

            this.shape.p2.x = tempX;
            this.shape.p2.y = tempY;
        }
        var withinError = false;
        var m = (this.shape.p1.y - this.shape.p2.y) / (this.shape.p1.x - this.shape.p2.x);
        for (var i = mousePoint.x - this.lineWidth / 2; i <= mousePoint.x + this.lineWidth / 2; i += .5) {
            for (var j = mousePoint.y - this.lineWidth / 2; j <= mousePoint.y + this.lineWidth / 2; j += .5) {
                withinError = Math.abs((this.shape.p1.y - j) / (this.shape.p1.x - i) - m) < .05 && i >= this.shape.p1.x && i <= this.shape.p2.x;
                if (withinError) {
                    break;
                }
            }
            if (withinError) {
                break;
            }
        }

        return withinError;
    }
    public inResizeZone(mousePoint: Point) {
        this.lastMousePoint = new Point(mousePoint.x, mousePoint.y);
        return ((mousePoint.x >= this.shape.p1.x - this.selectionZoneWidth && mousePoint.x <= this.shape.p1.x + this.selectionZoneWidth) &&
            (mousePoint.y >= this.shape.p1.y - this.selectionZoneWidth && mousePoint.y <= this.shape.p1.y + this.selectionZoneWidth)) ||
            ((mousePoint.x >= this.shape.p2.x - this.selectionZoneWidth && mousePoint.x <= this.shape.p2.x + this.selectionZoneWidth) &&
            (mousePoint.y >= this.shape.p2.y - this.selectionZoneWidth && mousePoint.y <= this.shape.p2.y + this.selectionZoneWidth));
    }
    public getCursorType(mousePoint: Point) {
        if ((mousePoint.x >= this.shape.p1.x - this.selectionZoneWidth && mousePoint.x <= this.shape.p1.x + this.selectionZoneWidth) &&
            (mousePoint.y >= this.shape.p1.y - this.selectionZoneWidth && mousePoint.y <= this.shape.p1.y + this.selectionZoneWidth)) {
            return "w-resize";
        } else if ((mousePoint.x >= this.shape.p2.x - this.selectionZoneWidth && mousePoint.x <= this.shape.p2.x + this.selectionZoneWidth) &&
            (mousePoint.y >= this.shape.p2.y - this.selectionZoneWidth && mousePoint.y <= this.shape.p2.y + this.selectionZoneWidth)) {
            return "e-resize";
        } else {
            return "auto";
        }
    }
    public resizeToLocation(mousePoint: Point) {
        var cursor = window.document.body.style.cursor;
        if (cursor == "w-resize") {
            this.shape.p1.x = mousePoint.x;
            this.shape.p1.y = mousePoint.y;
        } else if (cursor == "e-resize") {
            this.shape.p2.x = mousePoint.x;
            this.shape.p2.y = mousePoint.y;
        }
    }
    public move(newPoint: Point) {
        if (this.lastMousePoint != null) {
            var dx = newPoint.x - this.lastMousePoint.x;
            var dy = newPoint.y - this.lastMousePoint.y;
            this.shape.p1.x += dx;
            this.shape.p2.x += dx;
            this.shape.p1.y += dy;
            this.shape.p2.y += dy;
            this.lastMousePoint.x = newPoint.x;
            this.lastMousePoint.y = newPoint.y;
        } else {
            this.lastMousePoint = new Point(newPoint.x, newPoint.y);
        }
    }
}