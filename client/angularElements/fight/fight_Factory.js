app.factory('FightFact', function(){
	Fighters = {
		Left: null,
		Right: null
	};

	LevelUp = function(god, level){
		var fightingGod = {};
		fightingGod.God = god.God;
		fightingGod.TotalHealth = god.Health + (level * god.Health_Growth_Rate);
		fightingGod.HealthRemaining = fightingGod.TotalHealth;
		fightingGod.PercentHealthRemaining = function(){
			var percentRemaining = Math.round((this.HealthRemaining/this.TotalHealth) * 100);
			return percentRemaining+'%';
		};
		fightingGod.Mana = god.Mana + (level * god.Mana_Growth_Rate);
		fightingGod.Physical = god.Physical + (level * god.Physical_Growth_Rate);
		fightingGod.Magical = god.Magical + (level * god.Magical_Growth_Rate);
		fightingGod.HP5 = god.HP5 + (level * god.HP5_Growth_Rate);
		fightingGod.MP5 = god.MP5 + (level * god.MP5_Growth_Rate);
		fightingGod.Range = god.Range + (level * god.Range_Growth_Rate);
		fightingGod.Speed = god.Speed + (level * god.Speed_Growth_Rate);
		fightingGod.Damage = god.Damage + (level * god.Damage_Growth_Rate) + (god.Damage_Growth_Rate_Inc * (god.Damage_Growth_Rate_Type === 'Magical Power' ? fightingGod.Magical : fightingGod.Physical));
		fightingGod.Attack_MSec = god.Attack_Sec;
		
		fightingGod.AttacksMade = 0;
		fightingGod.Attacks = function(defender){
			this.AttacksMade++;
			defender.HealthRemaining -= Math.round(this.Damage * 100 / (defender.Protection + 100));
		};

		for (var x = 1; x < level; x++){
			fightingGod.Attack_MSec = fightingGod.Attack_MSec * god.Attack_Sec_Growth_Rate;
		}
		fightingGod.Attack_MSec *= 1000;

		return fightingGod;
	};


	CalcProtection = function(God){
		God.Protection = 0;
	};



	return {
		LevelUp: LevelUp,
		CalcProtection: CalcProtection,
		Fighters: Fighters
	};
});

