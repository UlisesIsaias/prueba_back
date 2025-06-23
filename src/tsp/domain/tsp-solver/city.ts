export class City {
  constructor(
    public id: number,
    public x: number,
    public y: number
  ) {}

  distanceTo(other: City): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
