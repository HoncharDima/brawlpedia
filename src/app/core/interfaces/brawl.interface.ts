export interface Brawl {
	Name: string;
	Image: string;
	Rarity: string;
	Role: string;
	MoveSpeed: number;
	Health: number;
	AttackRange: number;
	AttackDamage: number;
	SuperDamage?: number;
	ReloadTime?: number;
	ProjectileSpeed?: number;
}
