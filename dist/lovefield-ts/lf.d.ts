export declare enum ConstraintAction {
    RESTRICT = 0,
    CASCADE = 1
}
export declare enum ConstraintTiming {
    IMMEDIATE = 0,
    DEFERRABLE = 1
}
export declare enum DataStoreType {
    INDEXED_DB = 0,
    MEMORY = 1,
    LOCAL_STORAGE = 2,
    FIREBASE = 3,
    WEB_SQL = 4,
    OBSERVABLE_STORE = 5
}
export declare enum Order {
    DESC = 0,
    ASC = 1
}
export declare enum Type {
    ARRAY_BUFFER = 0,
    BOOLEAN = 1,
    DATE_TIME = 2,
    INTEGER = 3,
    NUMBER = 4,
    STRING = 5,
    OBJECT = 6
}
export declare enum TransactionType {
    READ_ONLY = 0,
    READ_WRITE = 1
}
export declare enum ErrorCode {
    SYSTEM_ERROR = 0,
    VERSION_MISMATCH = 1,
    CONNECTION_CLOSED = 2,
    TIMEOUT = 3,
    OPERATION_BLOCKED = 4,
    QUOTA_EXCEEDED = 5,
    TOO_MANY_ROWS = 6,
    SERVICE_NOT_FOUND = 7,
    UNKNOWN_PLAN_NODE = 8,
    DATA_ERROR = 100,
    TABLE_NOT_FOUND = 101,
    DATA_CORRUPTION = 102,
    INVALID_ROW_ID = 103,
    INVALID_TX_ACCESS = 105,
    OUT_OF_SCOPE = 106,
    INVALID_TX_STATE = 107,
    INCOMPATIBLE_DB = 108,
    ROW_ID_EXISTED = 109,
    IMPORT_TO_NON_EMPTY_DB = 110,
    DB_MISMATCH = 111,
    IMPORT_DATA_NOT_FOUND = 112,
    ALREADY_CONNECTED = 113,
    CONSTRAINT_ERROR = 200,
    DUPLICATE_KEYS = 201,
    NOT_NULLABLE = 202,
    FK_VIOLATION = 203,
    NOT_SUPPORTED = 300,
    FB_NO_RAW_TX = 351,
    IDB_NOT_PROVIDED = 352,
    WEBSQL_NOT_PROVIDED = 353,
    CANT_OPEN_WEBSQL_DB = 354,
    NO_CHANGE_NOTIFICATION = 355,
    NO_WEBSQL_TX = 356,
    NO_PRED_IN_TOSQL = 357,
    NOT_IMPL_IN_TOSQL = 358,
    LOCAL_STORAGE_NOT_PROVIDED = 359,
    NOT_IMPLEMENTED = 360,
    CANT_OPEN_IDB = 361,
    CANT_READ_IDB = 362,
    CANT_LOAD_IDB = 363,
    SYNTAX_ERROR = 500,
    UNBOUND_VALUE = 501,
    INVALID_NAME = 502,
    NAME_IN_USE = 503,
    INVALID_AUTO_KEY_TYPE = 504,
    INVALID_AUTO_KEY_COLUMN = 505,
    IMMEDIATE_EVAL_ONLY = 506,
    COLUMN_NOT_FOUND = 508,
    COLUMN_NOT_INDEXABLE = 509,
    BIND_ARRAY_OUT_OF_RANGE = 510,
    CANT_GET_IDB_TABLE = 511,
    CANT_GET_WEBSQL_TABLE = 512,
    UNKNOWN_QUERY_CONTEXT = 513,
    UNKNOWN_NODE_TYPE = 514,
    DUPLICATE_FROM = 515,
    DUPLICATE_WHERE = 516,
    INVALID_DELETE = 517,
    INVALID_INSERT = 518,
    INVALID_INSERT_OR_REPLACE = 519,
    DUPLICATE_INTO = 520,
    DUPLICATE_VALUES = 521,
    INVALID_SELECT = 522,
    UNBOUND_LIMIT_SKIP = 523,
    INVALID_DISTINCT = 524,
    INVALID_GROUPBY = 525,
    INVALID_PROJECTION = 526,
    INVALID_AGGREGATION = 527,
    DUPLICATE_LIMIT = 528,
    DUPLICATE_SKIP = 529,
    DUPLICATE_GROUPBY = 530,
    NEGATIVE_LIMIT_SKIP = 531,
    INVALID_UPDATE = 532,
    FK_LOOP = 533,
    FK_COLUMN_IN_USE = 534,
    SCHEMA_FINALIZED = 535,
    INVALID_FK_TABLE = 536,
    INVALID_FK_COLUMN = 537,
    INVALID_FK_COLUMN_TYPE = 538,
    FK_COLUMN_NONUNIQUE = 539,
    INVALID_FK_REF = 540,
    INVALID_OUTER_JOIN = 541,
    MISSING_FROM_BEFORE_JOIN = 542,
    PK_CANT_BE_FK = 543,
    DUPLICATE_PK = 544,
    NULLABLE_PK = 545,
    DUPLICATE_NAME = 546,
    INVALID_WHERE = 547,
    FROM_AFTER_WHERE = 548,
    FROM_AFTER_ORDER_GROUPBY = 549,
    INVALID_PREDICATE = 550,
    TEST_ERROR = 900,
    ASSERTION = 998,
    SIMULATED_ERROR = 999
}
declare enum Favor {
    RHS = -1,
    TIE = 0,
    LHS = 1
}
declare enum ExecType {
    NO_CHILD = -1,
    ALL = 0,
    FIRST_CHILD = 1
}
declare class UnboundKey {
}
type SingleKey = string | number;
type MultiKey = SingleKey[];
type Key = SingleKey | MultiKey;
declare class SingleKeyRange {
    readonly from: SingleKey | UnboundKey;
    readonly to: SingleKey | UnboundKey;
    static UNBOUND_VALUE: UnboundKey;
    static isUnbound(value: SingleKey | UnboundKey): boolean;
    static upperBound(key: SingleKey, shouldExclude?: boolean): SingleKeyRange;
    static lowerBound(key: SingleKey, shouldExclude?: boolean): SingleKeyRange;
    static only(key: SingleKey): SingleKeyRange;
    static all(): SingleKeyRange;
    static xor(a: boolean, b: boolean): boolean;
    static compare(lhs: SingleKeyRange, rhs: SingleKeyRange): Favor;
    static getBoundingRange(r1: SingleKeyRange, r2: SingleKeyRange): SingleKeyRange;
    static and(r1: SingleKeyRange, r2: SingleKeyRange): SingleKeyRange;
    static complement(keyRanges: SingleKeyRange[]): SingleKeyRange[];
    private static EMPTY_RANGE;
    private static compareKey;
    readonly excludeLower: boolean;
    readonly excludeUpper: boolean;
    constructor(from: SingleKey | UnboundKey, to: SingleKey | UnboundKey, excludeLower: boolean, excludeUpper: boolean);
    toString(): string;
    complement(): SingleKeyRange[];
    reverse(): SingleKeyRange;
    overlaps(range: SingleKeyRange): boolean;
    isAll(): boolean;
    isOnly(): boolean;
    contains(key: SingleKey): boolean;
    getBounded(min: SingleKey, max: SingleKey): SingleKeyRange;
    equals(range: SingleKeyRange): boolean;
}
type KeyRange = SingleKeyRange[];
type Range = SingleKeyRange | KeyRange;
interface PayloadType {
    [key: string]: unknown;
}
interface RawRow {
    id: number;
    value: PayloadType;
}
declare class Row {
    private id_;
    static DUMMY_ID: number;
    static getNextId(): number;
    static setNextId(nextId: number): void;
    static setNextIdIfGreater(nextId: number): void;
    static deserialize(data: RawRow): Row;
    static create(payload?: PayloadType): Row;
    static binToHex(buffer: ArrayBuffer | null): string | null;
    static hexToBin(hex: string | null): ArrayBuffer | null;
    private static nextId;
    protected payload_: PayloadType;
    constructor(id_: number, payload?: PayloadType);
    id(): number;
    assignRowId(id: number): void;
    payload(): PayloadType;
    defaultPayload(): PayloadType;
    toDbPayload(): PayloadType;
    serialize(): RawRow;
    keyOfIndex(indexName: string): Key;
}
interface LovefieldOptions {
    debugMode: boolean;
    memoryOnly: boolean;
    exceptionUrl: string;
    useGetAll: boolean;
    errorMessage(code: number): string;
}
export declare class options {
    static set(opt?: LovefieldOptions): void;
}
declare class ServiceId<T> {
    private serviceId;
    constructor(serviceId: string);
    toString(): string;
    getAsType(): T;
}
declare class Global {
    static get(): Global;
    private static instance;
    private services;
    private opt;
    constructor();
    clear(): void;
    registerService<T>(serviceId: ServiceId<T>, service: T): T;
    getService<T>(serviceId: ServiceId<T>): T;
    isRegistered<T>(serviceId: ServiceId<T>): boolean;
    listServices(): string[];
    getOptions(): LovefieldOptions;
    setOptions(options: LovefieldOptions): void;
}
export declare function bind(index: number): Binder;
export declare class Binder {
    readonly index: number;
    constructor(index: number);
    getIndex(): number;
}
type ValueOperandType = Binder | boolean | number | string | Date;
export type OperandType = Column | ValueOperandType;
interface Index {
    getNormalizedName(): string;
    hasNullableColumn(): boolean;
}
export interface RawForeignKeySpec {
    local: string;
    ref: string;
    action?: ConstraintAction;
    timing?: ConstraintTiming;
}
declare class ForeignKeySpec {
    readonly childTable: string;
    childColumn: string;
    parentTable: string;
    parentColumn: string;
    name: string;
    action: ConstraintAction;
    timing: ConstraintTiming;
    constructor(rawSpec: RawForeignKeySpec, childTable: string, name: string);
}
interface IndexedColumnSpec {
    name: string;
    order?: Order;
    autoIncrement?: boolean;
}
export interface IndexedColumn {
    schema: Column;
    order: Order;
    autoIncrement: boolean;
}
declare class IndexImpl implements Index {
    readonly tableName: string;
    readonly name: string;
    readonly isUnique: boolean;
    readonly columns: IndexedColumn[];
    constructor(tableName: string, name: string, isUnique: boolean, columns: IndexedColumn[]);
    getNormalizedName(): string;
    hasNullableColumn(): boolean;
}
declare class Constraint {
    readonly primaryKey: IndexImpl;
    readonly notNullable: Column[];
    readonly foreignKeys: ForeignKeySpec[];
    constructor(primaryKey: IndexImpl, notNullable: Column[], foreignKeys: ForeignKeySpec[]);
    getPrimaryKey(): IndexImpl;
    getNotNullable(): Column[];
    getForeignKeys(): ForeignKeySpec[];
}
interface BaseTable extends Table {
    getColumns(): Column[];
    getIndices(): Index[];
    persistentIndex(): boolean;
    getAlias(): string;
    getConstraint(): Constraint;
    getEffectiveName(): string;
    getRowIdIndexName(): string;
    deserializeRow(dbRecord: RawRow): Row;
}
declare class RelationEntry {
    readonly row: Row;
    private isPrefixApplied;
    static combineEntries(leftEntry: RelationEntry, leftEntryTables: string[], rightEntry: RelationEntry, rightEntryTables: string[]): RelationEntry;
    private static nextId;
    private static getNextId;
    id: number;
    constructor(row: Row, isPrefixApplied: boolean);
    getField(col: Column): unknown;
    setField(col: Column, value: unknown): void;
}
type AggregationResult = Relation | string | number;
declare class Relation {
    readonly entries: RelationEntry[];
    static createEmpty(): Relation;
    static intersect(relations: Relation[]): Relation;
    static union(relations: Relation[]): Relation;
    static fromRows(rows: Row[], tables: string[]): Relation;
    private static emptyRelation;
    private static assertCompatible;
    private tables;
    private aggregationResults;
    constructor(entries: RelationEntry[], tables: string[]);
    isCompatible(relation: Relation): boolean;
    getTables(): string[];
    isPrefixApplied(): boolean;
    getPayloads(): object[];
    getRowIds(): number[];
    setAggregationResult(column: Column, result: AggregationResult): void;
    getAggregationResult(column: Column): AggregationResult;
    hasAggregationResult(column: Column): boolean;
}
interface Predicate {
    eval(relation: Relation): Relation;
    setComplement(isComplement: boolean): void;
    copy(): Predicate;
    getColumns(results?: Column[]): Column[];
    getTables(results?: Set<Table>): Set<Table>;
    setId(id: number): void;
    getId(): number;
}
export interface PredicateProvider {
    eq(operand: OperandType): Predicate;
    neq(operand: OperandType): Predicate;
    lt(operand: OperandType): Predicate;
    lte(operand: OperandType): Predicate;
    gt(operand: OperandType): Predicate;
    gte(operand: OperandType): Predicate;
    match(operand: Binder | RegExp): Predicate;
    between(from: ValueOperandType, to: ValueOperandType): Predicate;
    in(values: Binder | ValueOperandType[]): Predicate;
    isNull(): Predicate;
    isNotNull(): Predicate;
}
export interface Column extends PredicateProvider {
    getName(): string;
    getNormalizedName(): string;
    getTable(): Table;
    getType(): Type;
    isNullable(): boolean;
    isUnique(): boolean;
    as(alias: string): Column;
}
export interface Table {
    getName(): string;
    as(alias: string): Table;
    createRow(value?: object): Row;
    [key: string]: unknown;
    col(name: string): Column;
}
export interface Pragma {
    enableBundledMode: boolean;
}
export interface DatabaseSchema {
    name(): string;
    version(): number;
    tables(): Table[];
    table(name: string): Table;
    pragma(): Pragma;
}
interface Comparator {
    compare(lhs: Key, rhs: Key): Favor;
    compareRange(key: Key, range: Range): boolean[];
    min(lhs: Key, rhs: Key): Favor;
    max(lhs: Key, rhs: Key): Favor;
    isInRange(key: Key, range: Range): boolean;
    isFirstKeyInRange(key: Key, range: Range): boolean;
    getAllRange(): Range;
    sortKeyRanges(keyRanges: Range[]): Range[];
    isLeftOpen(range: Range): boolean;
    rangeToKeys(range: Range): Key[];
    comparable(key: Key): boolean;
    keyDimensions(): number;
}
declare class IndexStats {
    totalRows: number;
    maxKeyEncountered: Key | null;
    constructor();
    add(key: Key, rowCount: number): void;
    remove(key: Key, removedCount: number): void;
    clear(): void;
    updateFromList(statsList: IndexStats[]): void;
}
interface RuntimeIndex {
    getName(): string;
    add(key: Key | SingleKey, value: number): void;
    set(key: Key | SingleKey, value: number): void;
    remove(key: Key | SingleKey, rowId?: number): void;
    get(key: Key | SingleKey): number[];
    cost(keyRange?: SingleKeyRange | KeyRange): number;
    getRange(range?: SingleKeyRange[] | KeyRange[], reverseOrder?: boolean, limit?: number, skip?: number): number[];
    clear(): void;
    containsKey(key: Key | SingleKey): boolean;
    min(): unknown[] | null;
    max(): unknown[] | null;
    serialize(): Row[];
    comparator(): Comparator;
    isUniqueKey(): boolean;
    stats(): IndexStats;
}
declare class UniqueId {
    private static nextId;
    uniqueId: string;
    uniqueNumber: number;
    getUniqueId(): string;
    getUniqueNumber(): number;
}
declare class TreeNode {
    private static EMPTY_ARRAY;
    parent: TreeNode | null;
    private children;
    constructor();
    getParent(): TreeNode;
    setParent(parentNode: TreeNode): void;
    getRoot(): TreeNode;
    getDepth(): number;
    isLeaf(): boolean;
    getChildren(): TreeNode[];
    getChildAt(index: number): TreeNode | null;
    getChildCount(): number;
    addChildAt(child: TreeNode, index: number): void;
    addChild(child: TreeNode): void;
    removeChildAt(index: number): TreeNode | null;
    removeChild(child: TreeNode): TreeNode | null;
    replaceChildAt(newChild: TreeNode, index: number): TreeNode | null;
    traverse(f: (node: TreeNode) => boolean | void): void;
}
declare abstract class Context extends UniqueId {
    schema: DatabaseSchema;
    private static buildPredicateMap;
    where: Predicate | null;
    clonedFrom: Context | null;
    private predicateMap;
    constructor(schema: DatabaseSchema);
    getPredicate(id: number): Predicate;
    bind(values: unknown[]): Context;
    bindValuesInSearchCondition(values: unknown[]): void;
    abstract getScope(): Set<Table>;
    abstract clone(): Context;
    protected cloneBase(context: Context): void;
}
declare abstract class PhysicalQueryPlanNode extends TreeNode {
    private numRelations;
    private execType;
    static ANY: number;
    constructor(numRelations: number, execType: ExecType);
    abstract execInternal(relations: Relation[], journal?: Journal, context?: Context): Relation[];
    exec(journal?: Journal, context?: Context): Promise<Relation[]>;
    toString(): string;
    toContextString(context: Context): string;
    private assertInput;
    private execNoChild;
    private execFirstChild;
    private execAllChildren;
}
declare class PhysicalQueryPlan {
    private rootNode;
    private scope;
    static getCombinedScope(plans: PhysicalQueryPlan[]): Set<Table>;
    constructor(rootNode: PhysicalQueryPlanNode, scope: Set<Table>);
    getRoot(): PhysicalQueryPlanNode;
    getScope(): Set<Table>;
}
interface TaskItem {
    context: Context;
    plan: PhysicalQueryPlan;
}
export declare class op {
    static and(...predicates: Predicate[]): Predicate;
    static or(...predicates: Predicate[]): Predicate;
    static not(operand: Predicate): Predicate;
    private static createPredicate;
}
export interface TransactionStats {
    success(): boolean;
    insertedRowCount(): number;
    updatedRowCount(): number;
    deletedRowCount(): number;
    changedTableCount(): number;
}
export interface QueryBuilder {
    exec(): Promise<unknown>;
    explain(): string;
    bind(values: unknown[]): QueryBuilder;
    toSql(stripValueInfo?: boolean): string;
    getTaskItem(): TaskItem;
    assertExecPreconditions(): void;
}
export interface SelectQuery extends QueryBuilder {
    from(...tables: Table[]): SelectQuery;
    where(predicate: Predicate): SelectQuery;
    innerJoin(table: Table, predicate: Predicate): SelectQuery;
    leftOuterJoin(table: Table, predicate: Predicate): SelectQuery;
    limit(numberOfRows: number | Binder): SelectQuery;
    skip(numberOfRows: number | Binder): SelectQuery;
    orderBy(column: Column, order?: Order): SelectQuery;
    groupBy(...columns: Column[]): SelectQuery;
}
interface ChangeRecord {
    addedCount: number;
    object: object[];
    index: number;
    removed: object[];
    type: string;
}
type ObserverCallback = (changes: ChangeRecord[]) => void;
type Modification = [Row | null, Row | null];
declare class TableDiff {
    private name;
    private added;
    private modified;
    private deleted;
    constructor(name: string);
    getName(): string;
    getAdded(): Map<number, Row>;
    getModified(): Map<number, Modification>;
    getDeleted(): Map<number, Row>;
    add(row: Row): void;
    modify(modification: Modification): void;
    delete(row: Row): void;
    merge(other: TableDiff): void;
    getAsModifications(): Modification[];
    toString(): string;
    getReverse(): TableDiff;
    isEmpty(): boolean;
}
declare class Journal {
    private scope;
    private schema;
    private cache;
    private indexStore;
    private constraintChecker;
    private inMemoryUpdater;
    private terminated;
    private pendingRollback;
    private tableDiffs;
    constructor(global: Global, txScope: Set<Table>);
    getDiff(): Map<string, TableDiff>;
    getIndexDiff(): RuntimeIndex[];
    getScope(): Map<string, Table>;
    insert(t: Table, rows: Row[]): void;
    update(t: Table, rows: Row[]): void;
    insertOrReplace(t: Table, rows: Row[]): void;
    remove(t: Table, rows: Row[]): void;
    checkDeferredConstraints(): void;
    commit(): void;
    rollback(): void;
    private assertJournalWritable;
    private checkScope;
    private modifyRow;
    private updateByCascade;
    private removeByCascade;
}
export interface RawBackStore {
    getRawDBInstance(): unknown;
    getRawTransaction(): unknown;
    dropTable(tableName: string): Promise<void>;
    addTableColumn(tableName: string, columnName: string, defaultValue: string | number | boolean | Date | ArrayBuffer | null): Promise<void>;
    dropTableColumn(tableName: string, columnName: string): Promise<void>;
    renameTableColumn(tableName: string, oldColumnName: string, newColumnName: string): Promise<void>;
    createRow(payload: object): Row;
    getVersion(): number;
    dump(): Promise<object>;
}
export interface DeleteQuery extends QueryBuilder {
    from(table: Table): DeleteQuery;
    where(predicate: Predicate): DeleteQuery;
}
export interface InsertQuery extends QueryBuilder {
    into(table: Table): InsertQuery;
    values(rows: Row[] | Binder | Binder[]): InsertQuery;
}
export interface UpdateQuery extends QueryBuilder {
    set(column: Column, value: unknown): UpdateQuery;
    where(predicate: Predicate): UpdateQuery;
}
export interface Transaction {
    exec(queries: QueryBuilder[]): Promise<unknown>;
    begin(scope: Table[]): Promise<void>;
    attach(query: QueryBuilder): Promise<unknown>;
    commit(): Promise<unknown>;
    rollback(): Promise<unknown>;
    stats(): TransactionStats | null;
}
export interface DatabaseConnection {
    getSchema(): DatabaseSchema;
    select(...columns: Column[]): SelectQuery;
    insert(): InsertQuery;
    insertOrReplace(): InsertQuery;
    update(table: Table): UpdateQuery;
    delete(): DeleteQuery;
    observe(query: SelectQuery, callback: ObserverCallback): void;
    unobserve(query: SelectQuery, callback: ObserverCallback): void;
    createTransaction(type?: TransactionType): Transaction;
    close(): void;
    export(): Promise<object>;
    import(data: object): Promise<object[]>;
}
export declare class fn {
    static avg(col: Column): Column;
    static count(column?: Column): Column;
    static distinct(col: Column): Column;
    static max(col: Column): Column;
    static min(col: Column): Column;
    static stddev(col: Column): Column;
    static sum(col: Column): Column;
    static geomean(col: Column): Column;
}
export declare class Capability {
    static get(): Capability;
    private static instance;
    supported: boolean;
    indexedDb: boolean;
    webSql: boolean;
    localStorage: boolean;
    private agent;
    private browser;
    private version;
    private versionMap;
    constructor();
    getDetection(): string;
    private detect;
    private convertVersion;
    private detectNodeJS;
    private detectBrowser;
    private detectVersion;
    private isChrome;
    private isEdge;
    private isFirefox;
    private isIE;
    private isAndroid;
    private isSafari;
    private isIOS;
}
export interface ConnectOptions {
    onUpgrade?: (raw: RawBackStore) => Promise<unknown>;
    storeType: DataStoreType;
    websqlDbSize?: number;
    enableInspector?: boolean;
}
declare global {
    interface Window {
        '#lfInspect': Function;
        '#lfRowId': Function;
    }
}
export declare class TableBuilder {
    private static NULLABLE_TYPES_BY_DEFAULT;
    private static toPascal;
    private name;
    private columns;
    private uniqueColumns;
    private uniqueIndices;
    private nullable;
    private pkName;
    private indices;
    private persistIndex;
    private fkSpecs;
    constructor(tableName: string);
    addColumn(name: string, type: Type): TableBuilder;
    addPrimaryKey(columns: string[] | IndexedColumnSpec[], autoInc?: boolean): TableBuilder;
    addForeignKey(name: string, rawSpec: RawForeignKeySpec): TableBuilder;
    addUnique(name: string, columns: string[]): TableBuilder;
    addNullable(columns: string[]): TableBuilder;
    addIndex(name: string, columns: string[] | object[], unique?: boolean, order?: Order): TableBuilder;
    persistentIndex(value: boolean): void;
    getSchema(): BaseTable;
    getFkSpecs(): ForeignKeySpec[];
    private checkNamingRules;
    private checkNameConflicts;
    private checkPrimaryKey;
    private checkPrimaryKeyNotForeignKey;
    private checkPrimaryKeyDuplicateIndex;
    private checkPrimaryKeyNotNullable;
    private normalizeColumns;
    private markFkIndexForColumnUnique;
}
export interface Builder {
    getSchema(): DatabaseSchema;
    getGlobal(): Global;
    connect(options?: ConnectOptions): Promise<DatabaseConnection>;
    createTable(tableName: string): TableBuilder;
    setPragma(pragma: Pragma): Builder;
}
export declare class schema {
    static create(name: string, version: number): Builder;
}
export {};
