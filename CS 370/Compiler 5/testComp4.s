#GLOBAL VARIABLES
	.data
#VARDECL INT
x:	.word 0
#VARDECL INT
y:	.word 0
#STRING DATA SECTION
	.section	.rodata
.LC0:
	.string	"hello world!\n"
.LC1:
	.string	"x=%d\n"
.LC2:
	.string	"if works!\n"
.LC3:
	.string	"else works!\n"
.LC4:
	.string	"if works!\n"
.LC5:
	.string	"else works!\n"
.LC6:
	.string	"goodbye"
.LC7:
	.string	"third arg"
.LC8:
	.string	"goodbye %s %d\n"
.LC9:
	.string	"second"
.LC10:
	.string	"Hello World!\n"
.LC11:
	.string	"loopy loop\n"
	.text
		#*****-----FUNCTION func-----*****
#--FUNCTION ARG LIST
#VARDECL INT
a:	.word 0
#VARDECL STRING
b:	.word 0
#VARDECL STRING
s:	.word 0
#--FUNCTION BODY
	.globl	func
	.type	func, @function
func:
	pushq	%rbp
	movq	%rsp, %rbp
	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC0
	movq	$.LC0, %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~
#ASSIGNMENT
#--ASSIGNMENT LHS 
#EXPRESSION
#--EXPRESSION LHS
#CONSTANT INT 42
	movq	$42, %rdx
	pushq	%rdx
#--EXPRESSION RHS
#CONSTANT INT 12
	movq	$12, %rdx
	popq	%rcx
#EXPR ADD LHS + RHS
	addq	%rcx, %rdx
#--ASSIGNMENT TO x 
	movq	%rdx, x
	movq	%rdx, %rdi
	#~~~~~FUNCALL printf~~~~~
#ARGUMENT
#CONSTANT STRING $.LC1
	movq	$.LC1, %rax
	movq	%rax, %rdi
#ARGUMENT
#VARREF
	movq	x, %rdx
	movq	%rax, %rsi
	movl	$0, %eax
	call	printf
	#~~~~~ENDFUNCALL printf~~~~~
#IFTHEN
#RELEXPR
#CONSTANT INT 20
	movq	$20, %rdx
#--RELEXPR LHS
	pushq	%rdx
#CONSTANT INT 10
	movq	$10, %rdx
#--RELEXPR RHS
	popq	%rcx
#COMPARE LHS AND RHS
	cmp	%rdx, %rcx
#--RELATIONAL JUMP INSTR
	jg	LL101
	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC2
	movq	$.LC2, %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~
	jmp	LL102
#--IFBODY
LL101:
	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC3
	movq	$.LC3, %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~
#--ELSEBODY
LL102:
#IFTHEN
#RELEXPR
#CONSTANT INT 20
	movq	$20, %rdx
#--RELEXPR LHS
	pushq	%rdx
#CONSTANT INT 10
	movq	$10, %rdx
#--RELEXPR RHS
	popq	%rcx
#COMPARE LHS AND RHS
	cmp	%rdx, %rcx
#--RELATIONAL JUMP INSTR
	jl	LL103
	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC4
	movq	$.LC4, %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~
	jmp	LL104
#--IFBODY
LL103:
	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC5
	movq	$.LC5, %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~
#--ELSEBODY
LL104:

	popq	%rbp
	movl	$0, %eax
	ret
		#*****-----ENDFUNCTION func-----*****
		#*****-----FUNCTION main-----*****
#--FUNCTION ARG LIST
#VARDECL INT
argc:	.word 0
#VARDECL STRING
argv:	.word 0
#--FUNCTION BODY
	.globl	main
	.type	main, @function
main:
	pushq	%rbp
	movq	%rsp, %rbp
	#~~~~~FUNCALL func~~~~~
#ARGUMENT
#CONSTANT INT 42
	movq	$42, %rdx
	movq	%rax, %rdi
#ARGUMENT
#CONSTANT STRING $.LC6
	movq	$.LC6, %rax
	movq	%rax, %rsi
#ARGUMENT
#CONSTANT STRING $.LC7
	movq	$.LC7, %rax
	movq	%rax, %rdx
	movl	$0, %eax
	call	func
	#~~~~~ENDFUNCALL func~~~~~
	#~~~~~FUNCALL printf~~~~~
#ARGUMENT
#CONSTANT STRING $.LC8
	movq	$.LC8, %rax
	movq	%rax, %rdi
#ARGUMENT
#CONSTANT STRING $.LC9
	movq	$.LC9, %rax
	movq	%rax, %rsi
#ARGUMENT
#EXPRESSION
#--EXPRESSION LHS
#CONSTANT INT 42
	movq	$42, %rdx
	pushq	%rdx
#--EXPRESSION RHS
#EXPRESSION
#--EXPRESSION LHS
#CONSTANT INT 4
	movq	$4, %rdx
	pushq	%rdx
#--EXPRESSION RHS
#EXPRESSION
#--EXPRESSION LHS
#VARREF
	movq	x, %rdx
	pushq	%rdx
#--EXPRESSION RHS
#CONSTANT INT 2
	movq	$2, %rdx
	popq	%rcx
#EXPR ADD LHS + RHS
	addq	%rcx, %rdx
	popq	%rcx
#EXPR ADD LHS + RHS
	addq	%rcx, %rdx
	popq	%rcx
#EXPR ADD LHS + RHS
	addq	%rcx, %rdx
	movq	%rax, %rdx
	movl	$0, %eax
	call	printf
	#~~~~~ENDFUNCALL printf~~~~~
	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC10
	movq	$.LC10, %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~
#ASSIGNMENT
#--ASSIGNMENT LHS 
#CONSTANT INT 0
	movq	$0, %rdx
#--ASSIGNMENT TO x 
	movq	%rdx, x
	movq	%rdx, %rdi
#WHILE LOOP
	jmp	LL105
#--LOOPBODY
LL106:
	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC11
	movq	$.LC11, %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~
#ASSIGNMENT
#--ASSIGNMENT LHS 
#EXPRESSION
#--EXPRESSION LHS
#VARREF
	movq	x, %rdx
	pushq	%rdx
#--EXPRESSION RHS
#CONSTANT INT 1
	movq	$1, %rdx
	popq	%rcx
#EXPR ADD LHS + RHS
	addq	%rcx, %rdx
#--ASSIGNMENT TO x 
	movq	%rdx, x
	movq	%rdx, %rdi
#--LOOPCONDITION
LL105:
#RELEXPR
#VARREF
	movq	x, %rdx
#--RELEXPR LHS
	pushq	%rdx
#CONSTANT INT 10
	movq	$10, %rdx
#--RELEXPR RHS
	popq	%rcx
#COMPARE LHS AND RHS
	cmp	%rdx, %rcx
#--RELATIONAL JUMP INSTR
	jl	LL106

	popq	%rbp
	movl	$0, %eax
	ret
		#*****-----ENDFUNCTION main-----*****
