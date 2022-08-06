export type NodeValue = string | number;
export type AdjacencyList = {
	[name: NodeValue]: string[];
};
export type WeightedAdjacencyList = {
	[name: NodeValue]: Edge[];
};
export type Edge = {
	vertex: NodeValue;
	weight: number;
};